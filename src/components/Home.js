import React from "react";
import NavBar from "./NavBar";
import BasicDetails from "./BasicDetails/index";
import InsuranceQuestionnair from "./InsuranceQuestionnaire";
import Plans from "./Plans";
import Ekyc from "./Ekyc";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import "./home.css";

export default function Home() {
  let object = useLocation();
  console.log(object);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/products">
          <Route path="basicDeails/*" element={<BasicDetails />} />
          <Route
            path="insuranceQuestionnaire"
            element={<InsuranceQuestionnair />}
          />
          <Route path="plans" element={<Plans />} />
          <Route path="ekyc" element={<Ekyc />} />
          <Route
            path=""
            element={<Navigate replace to="basicDeails" />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
