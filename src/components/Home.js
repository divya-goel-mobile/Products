import { React, useState } from "react";
import NavBar from "./NavBar";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import InsuranceQuestionnair from "./InsuranceQuestionnaire";
import Plans from "./Plans";
import Ekyc from "./Ekyc";
import { ReferenceName } from "../constants.js";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";

import "./home.css";

export default function Home() {
  const navigate = useNavigate();

  let [step, setStep] = useState(0);
  let [basicData, setBasicData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
  });

  let [contactData, setContactData] = useState({
    email: "",
    mobile: "",
  });

  let [error, setError] = useState({
    firstName: null,
    lastName: null,
    dob: null,
    gender: null,
    email: null,
    mobile: null,
  });

  function validate(step) {
    let data = basicData;
    if (step == 0) data = contactData;
    let isError = false;
    for (let key in data) {
      if (data[key] == "" && key != "lastName") {
        error[key] = `${ReferenceName[key]} can not be blank`;
        isError = true;
      } else if (
        key == "email" &&
        !String(data[key])
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        error[key] = `Not a valid email address`;
        isError = true;
      } else error[key] = null;
    }
    setError({ ...error });
    if (isError) return false;
    else return true;
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/products">
          <Route
            path="basicDeails"
            element={
              <BasicInfo
                basicData={basicData}
                setBasicData={setBasicData}
                error={error}
                validate={validate}
              ></BasicInfo>
            }
          />
          <Route
            path="contactInfo"
            element={
              <ContactInfo
                contactData={contactData}
                setContactData={setContactData}
                error={error}
                validate={validate}
              ></ContactInfo>
            }
          />
          <Route
            path="insuranceQuestionnaire"
            element={<InsuranceQuestionnair />}
          />
          <Route path="plans" element={<Plans />} />
          <Route path="ekyc" element={<Ekyc />} />
          <Route
            path=""
            element={<Navigate replace to="contactInfo" />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
