import { React, useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { HealthInsuranceQuestion } from "../constants";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function InsuranceQuestionnair() {
  const navigate = useNavigate();

  let [step, setStep] = useState(0);
  let [answer, setAnswer] = useState(["", "", ""]);

  function handleClick(opt) {
    answer[step] = opt;
    next();
  }

  function next() {
    if (step < 2) {
      setStep(++step);
    } else {
      navigate("../ekyc");
    }
  }

  return (
    <section class="chat-container">
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">
              Before we begin, let's make sure our health offering is right for
              you
            </h3>
            {/* <p class="StyledElements__QuestionSubHeader-vnab5o-1 ChatQuestionWrapper__SubHeader-sc-1uvt1f0-3 kDtpEG kkAEss">
              Just answer these 3 quick&nbsp;questions
            </p> */}
            <form autocomplete="off" novalidate="" class="bcuijq">
              <div className="question-form" style={{ width: "100%" }}>
                <div style={{ width: "416px" }} class="faXeTW hLEbcr">
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
