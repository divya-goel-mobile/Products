import { React, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Email from "@mui/icons-material/Email";
import ContactPhone from "@mui/icons-material/ContactPhone";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import style from "./styles/basic-info.module.css";
import OtpInputBox from "./common/OtpInput";
import Divider from "@mui/material/Divider";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { mobileCheck } from "../utility/common";
import { Drawer } from "@mui/material";

export default function ContactInfo({
  contactData,
  setContactData,
  error,
  validate,
}) {
  console.log("rerender");
  let [isEmailOtpActive, setEmailOtpActive] = useState(false);
  let [isMobileOtpActive, setMobileOtpActive] = useState(false);
  let [isAadharOtpActive, setAadharOtpActive] = useState(false);

  let [isEmailVarified, setEmailVerified] = useState(false);
  let [isMobileVarified, setMobileVerified] = useState(false);
  let [isAadharVerified, setAadharVerified] = useState(false);

  let [emailOtp, setEmailOtp] = useState("");
  let [mobileOtp, setMobileOtp] = useState("");
  let [aadharOtp, setAadharOtp] = useState("");

  useEffect(() => {
    if (emailOtp.length == 4) setEmailVerified(true);
  }, [emailOtp]);

  useEffect(() => {
    if (mobileOtp.length == 4) setMobileVerified(true);
  }, [mobileOtp]);
  useEffect(() => {
    if (aadharOtp.length == 4) setAadharVerified(true);
  }, [aadharOtp]);

  let navigate = useNavigate();
  function next() {
    navigate("../basicDeails");
  }
  return (
    <section class="chat-container">
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">
              Lets get you an account so you can come back to your application
              later...
            </h3>

            <div className={style.basicDetailContainer}>
              <div class="input-container  text">
                <TextField
                  id="filled-basic"
                  label="Email"
                  variant="outlined"
                  error={error["email"] != null}
                  helperText={error["email"]}
                  required
                  fullWidth
                  spellCheck={false}
                  value={contactData["email"]}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  onBlur={(e) => {
                    validate(0, "email");
                  }}
                  onChange={(e) => {
                    setEmailOtpActive(false);
                    setEmailVerified(false);
                    contactData["email"] = e.target.value;
                    setContactData({ ...contactData });
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="start">
                        {!isEmailVarified ? (
                          <Button
                            onClick={() => {
                              if (validate(0, "email")) setEmailOtpActive(true);
                            }}
                            sx={{
                              fontSize: "12px",
                              color: "rgba(0, 0, 0, 0.6)",
                            }}
                          >
                            verify
                          </Button>
                        ) : (
                          <CheckCircleRoundedIcon sx={{ color: "green" }} />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
                {isEmailOtpActive &&
                  !isEmailVarified &&
                  (mobileCheck() ? (
                    // <Drawer open={true} anchor={"bottom"}>
                    //   <OtpInputBox callback={setEmailOtp}></OtpInputBox>
                    // </Drawer>
                    <OtpInputBox callback={setEmailOtp}></OtpInputBox>
                  ) : (
                    <OtpInputBox callback={setEmailOtp}></OtpInputBox>
                  ))}
              </div>
              <div class="input-container  mt30 text">
                <TextField
                  id="filled-basic"
                  fullWidth
                  label="Mobile No."
                  variant="outlined"
                  value={contactData["mobile"]}
                  onChange={(e) => {
                    setMobileOtpActive(false);
                    setMobileVerified(false);
                    contactData["mobile"] = e.target.value.slice(0, 10);
                    setContactData({ ...contactData });
                  }}
                  onBlur={(e) => {
                    validate(0, "mobile");
                  }}
                  error={error["mobile"] != null}
                  helperText={error["mobile"]}
                  spellCheck={false}
                  type="number"
                  required
                  inputProps={{
                    maxlength: 13,
                    autocomplete: "off",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ContactPhone />{" "}
                        <span className="prefix-code">+91</span>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="start">
                        {!isMobileVarified ? (
                          <Button
                            onClick={() => {
                              if (validate(0, "mobile"))
                                setMobileOtpActive(true);
                            }}
                            sx={{
                              fontSize: "12px",
                              color: "rgba(0, 0, 0, 0.6)",
                            }}
                          >
                            verify
                          </Button>
                        ) : (
                          <CheckCircleRoundedIcon sx={{ color: "green" }} />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
                {isMobileOtpActive &&
                  !isMobileVarified &&
                  (mobileCheck() ? (
                    // <Drawer open={true} anchor={"bottom"}>
                    //   <OtpInputBox callback={setMobileOtp}></OtpInputBox>
                    // </Drawer>
                    <OtpInputBox callback={setMobileOtp}></OtpInputBox>
                  ) : (
                    <OtpInputBox callback={setMobileOtp}></OtpInputBox>
                  ))}
              </div>

              <Divider
                sx={{ color: "rgba(0, 0, 0, 0.6)", "margin-top": "30px" }}
              >
                OR
              </Divider>

              <div class="input-container  mt30 text">
                <TextField
                  fullWidth
                  label="Aadhar Number"
                  variant="outlined"
                  value={contactData["aadharContact"]}
                  onChange={(e) => {
                    setAadharOtpActive(false);
                    setAadharVerified(false);
                    contactData["aadharContact"] = e.target.value.slice(0, 12);
                    setContactData({ ...contactData });
                  }}
                  onBlur={(e) => {
                    validate(0, "aadharContact");
                  }}
                  error={error["aadharContact"] != null}
                  helperText={error["aadharContact"]}
                  spellCheck={false}
                  type="number"
                  required
                  inputProps={{
                    maxlength: 13,
                    autocomplete: "off",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FingerprintIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="start">
                        {!isAadharVerified ? (
                          <Button
                            onClick={() => {
                              if (validate(0, "aadharContact"))
                                setAadharOtpActive(true);
                            }}
                            sx={{
                              fontSize: "12px",
                              color: "rgba(0, 0, 0, 0.6)",
                            }}
                          >
                            verify
                          </Button>
                        ) : (
                          <CheckCircleRoundedIcon sx={{ color: "green" }} />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
                {isAadharOtpActive &&
                  !isAadharVerified &&
                  (mobileCheck() ? (
                    // <Drawer
                    //   style={{ height: "200px" }}
                    //   open={true}
                    //   anchor={"bottom"}
                    // >
                    //   <OtpInputBox callback={setAadharOtp}></OtpInputBox>
                    // </Drawer>
                    <OtpInputBox callback={setAadharOtp}></OtpInputBox>
                  ) : (
                    <OtpInputBox callback={setAadharOtp}></OtpInputBox>
                  ))}
              </div>
            </div>
          </div>
          <div class="submit-wrap align-center">
            <Button
              variant="contained"
              onClick={next}
              color="error"
              disabled={
                !((isMobileVarified && isEmailVarified) || isAadharVerified)
              }
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
