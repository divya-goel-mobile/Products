import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Email from "@mui/icons-material/Email";
import ContactPhone from "@mui/icons-material/ContactPhone";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

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
              Lets get you an account so you can come back your quote later
            </h3>
            <form autoComplete="off" class="bcuijq">
              <div class="text-question-container contact-info">
                <div class="question-form">
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
                      onChange={(e) => {
                        contactData["mobile"] = e.target.value;
                        setContactData({ ...contactData });
                      }}
                      error={error["mobile"] != null}
                      helperText={error["mobile"]}
                      spellCheck={false}
                      type="number"
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <ContactPhone />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            </form>
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
