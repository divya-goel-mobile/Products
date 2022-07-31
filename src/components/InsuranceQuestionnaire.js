import { React, useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { HealthInsuranceQuestion, marks } from "../constants";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Slider from "@mui/material/Slider";

export default function InsuranceQuestionnair() {
  const navigate = useNavigate();

  let [step, setStep] = useState(0);
  let [answer, setAnswer] = useState(["", "", ""]);

  function handleClick(opt) {
    if (opt == "no" && step == 0) {
      setStep(step + 3);
    } else next();
  }

  function next() {
    if (step < HealthInsuranceQuestion.length - 1) {
      setStep(++step);
    } else {
      navigate("../plans");
    }
  }
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <section class="chat-container">
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">
              Let's make sure our health offering is right for you
            </h3>
            {/* <p class="StyledElements__QuestionSubHeader-vnab5o-1 ChatQuestionWrapper__SubHeader-sc-1uvt1f0-3 kDtpEG kkAEss">
              Just answer these 3 quick&nbsp;questions
            </p> */}
            <form autocomplete="off" novalidate="" class="bcuijq">
              <div className="question-form" style={{ width: "100%" }}>
                <div style={{ "max-width": "416px" }} class="faXeTW hLEbcr">
                  <div style={{ width: "100%" }} class="cZobsb gLeraX">
                    <div class="cGIqAI gQDvru" style={{ opacity: "1" }}>
                      <div height="auto,57" class="ifOqJt kIFXiF">
                        <div timeout="400" class="flgDQF" reversed="">
                          <div class="cGIqAI gLeraX enter-done">
                            <div class="cDIwQB XAgdT">
                              {HealthInsuranceQuestion[step].heading}
                            </div>
                            <div class="cDIwQB gQIPbk">
                              {HealthInsuranceQuestion[step].question}
                            </div>
                          </div>
                        </div>
                      </div>
                      {HealthInsuranceQuestion[step].type == 2 && (
                        <Slider
                          style={{ color: "red", marginTop: "20px" }}
                          aria-label="Always visible"
                          defaultValue={10}
                          getAriaValueText={valuetext}
                          valueLabelDisplay="auto"
                          step={1}
                          marks={marks}
                        />
                      )}

                      {HealthInsuranceQuestion[step].type == 1 && (
                        <div class="EJVGF eqJfKL">
                          <Button
                            onClick={(e) => handleClick("no")}
                            variant="outlined"
                            class="DaHEG dGJoGc"
                          >
                            No
                          </Button>
                          <Button
                            onClick={(e) => handleClick("yes")}
                            variant="outlined"
                            class="DaHEG dGJoGc"
                          >
                            Yes
                          </Button>
                        </div>
                      )}
                      {HealthInsuranceQuestion[step].type == 2 && (
                        <div class="EJVGF eqJfKL">
                          <Button
                            onClick={(e) => handleClick("yes")}
                            variant="outlined"
                            class="DaHEG dGJoGc"
                          >
                            Next
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </span>
    </section>
  );
}
