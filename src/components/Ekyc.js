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
import style from "./styles/basic-info.module.css";

import "./ekyc.scss";
import ekyc from "./ekyc.module.css";
import "./home.css";

export default function Ekyc({ ekycData, setEkycData, error, validate }) {
  let [aadhar, setAadhar] = useState("");
  let [pan, setPan] = useState("");
  let [aadharUpload, setAadharUpload] = useState("");
  let [panUpload, setPanUpload] = useState("");

  const navigate = useNavigate();

  function next() {
    if (validate(2)) navigate("../policyIssuance");
  }
  return (
    <section class="chat-container">
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">
              Provide your identity so that we can know you better
            </h3>
            <div className={style.basicDetailContainer}>
              <div class="input-container  text">
                <TextField
                  label="Aadhar Number"
                  variant="outlined"
                  required
                  fullWidth
                  type="number"
                  value={ekycData["aadharEkyc"]}
                  onBlur={(e) => {
                    validate(2, "aadharEkyc");
                  }}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  onChange={(e) => {
                    ekycData["aadharEkyc"] = e.target.value.slice(0, 12);
                    setAadhar(ekycData["aadhar"]);
                    setEkycData({ ...ekycData });
                  }}
                  error={error["aadharEkyc"] != null}
                  helperText={error["aadharEkyc"]}
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
                        <input
                          hidden
                          onChange={() => setAadharUpload(true)}
                          accept="image/*"
                          capture="environment"
                          type="file"
                        />
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
                  value={ekycData["pan"]}
                  spellCheck={false}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  onChange={(e) => {
                    ekycData["pan"] = e.target.value.slice(0, 10).toUpperCase();
                    setPan(ekycData["pan"]);
                    setEkycData({ ...ekycData });
                  }}
                  onBlur={(e) => {
                    validate(2, "pan");
                  }}
                  error={error["pan"] != null}
                  helperText={error["pan"]}
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
                        <input
                          hidden
                          onChange={() => setPanUpload(true)}
                          accept="image/*"
                          type="file"
                          capture="environment"
                        />
                        <PhotoCamera />
                      </IconButton>
                    ),
                  }}
                />
              </div>
            </div>
          </div>

          <div class="submit-wrap align-center">
            <Button
              disabled={
                !(pan != "" && aadhar != "" && aadharUpload && panUpload)
              }
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
