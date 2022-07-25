import { React, useState } from "react";
import { BasicDetailsHeadings } from "../../constants";
import { BasicInfo } from "./BasicInfo";
import { AddressInfo } from "./AddressInfo";
import { ContactInfo } from "./ContactInfo";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { ReferenceName } from "../../constants.js";
import { useNavigate } from "react-router-dom";

export default function BasicDetails() {
  const navigate = useNavigate();

  let [step, setStep] = useState(0);
  let [basicData, setBasicData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
  });

  let [addressData, setAddressData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
  });
  function next() {
    if (step < 2 && validate()) {
      setStep(++step);
    } else if (step == 2) {
      navigate("../insuranceQuestionnaire");
    }
  }

  let [error, setError] = useState({
    firstName: null,
    lastName: null,
    dob: null,
    gender: null,
  });

  function validate() {
    debugger;
    let data = basicData;
    let isError = false;
    for (let key in data) {
      if (data[key] == "" && key != "lastName") {
        error[key] = `${ReferenceName[key]} can not be blank`;
        isError = true;
      } else error[key] = null;
    }
    setError({ ...error });
    if (isError) return false;
    else return true;
  }
  return (
    <section class="chat-container">
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">{BasicDetailsHeadings[step]}</h3>
            {step == 0 && (
              <BasicInfo
                basicData={basicData}
                setBasicData={setBasicData}
                error={error}
              ></BasicInfo>
            )}
            {step == 1 && <AddressInfo></AddressInfo>}
            {step == 2 && <ContactInfo></ContactInfo>}
          </div>
          <div class="submit-wrap align-center">
            <Button
              variant="contained"
              onClick={next}
              color="error"
              endIcon={<SendIcon />}
            >
              Next
            </Button>
          </div>
        </div>
      </span>
    </section>
  );
}
