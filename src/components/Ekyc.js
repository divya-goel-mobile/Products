import { React, useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

import "./ekyc.scss";
import ekyc from "./ekyc.module.css";
import "./home.css";

export default function Ekyc() {
  const navigate = useNavigate();

  function next() {
    // navigate("../plans");
  }
  return (
    <section class="chat-container">
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">
              Provide your identity so that we can know you better
            </h3>
            <form autoComplete="off" class="bcuijq">
              <div class="text-question-container contactInfo">
                <div class="question-form">
                  <div class="input-container  text">
                    <TextField
                      label="Aadhar Number"
                      variant="outlined"
                      required
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FingerprintIcon />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                          >
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                          </IconButton>
                        ),
                      }}
                    />
                  </div>
                  <div class="input-container  mt30 text">
                    <TextField
                      label="PAN Number"
                      variant="outlined"
                      required
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PermIdentityIcon />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                          >
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                          </IconButton>
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
              onClick={next}
              variant="contained"
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
