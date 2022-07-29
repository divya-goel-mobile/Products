import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Email from "@mui/icons-material/Email";
import ContactPhone from "@mui/icons-material/ContactPhone";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import style from "./styles/basic-info.module.css";

export default function ContactInfo({
  contactData,
  setContactData,
  error,
  validate,
}) {
  let navigate = useNavigate();
  function next() {
    if (validate(0)) {
      navigate("../basicDeails");
    }
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
                  onBlur={(e) => {
                    validate(0, "email");
                  }}
                  onChange={(e) => {
                    contactData["email"] = e.target.value;
                    setContactData({ ...contactData });
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div class="input-container  mt30 text">
                <TextField
                  id="filled-basic"
                  fullWidth
                  label="Mobile No."
                  variant="outlined"
                  value={contactData["mobile"]}
                  onChange={(e) => {
                    contactData["mobile"] = e.target.value;
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
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ContactPhone />{" "}
                        <span className="prefix-code">+91</span>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
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
