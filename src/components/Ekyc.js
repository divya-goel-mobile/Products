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

export default function Ekyc({
  ekycData,
  setEkycData,
  error,
  validate,
  amount,
}) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      return;
    }

    const options = {
      key: "rzp_test_0AWs9BOIkdhoVj",
      currency: "INR",
      amount: amount * 100,
      name: "Prudential Health Insurance",
      description: "Thanks for purchasing",
      image:
        "https://www.prudentialplc.com/~/media/Images/P/Prudential-V13/logo/updated-logo.png?h=200&iar=0&w=200",
      theme: {
        color: "#ed1b2e",
      },

      handler: function (response) {
        navigate("../policyIssuance");
      },
      prefill: {
        name: "Prudential Health Insurance",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const navigate = useNavigate();

  function next() {
    if (validate(2)) displayRazorpay(amount);
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
                    setEkycData({ ...ekycData });
                  }}
                  error={error["aadharEkyc"] != null}
                  helperText={
                    error["aadharEkyc"]
                      ? error["aadharEkyc"]
                      : ekycData["aadharUpload"]
                      ? `${ekycData["aadharUpload"]} uploaded successfully`
                      : ""
                  }
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
                          onChange={(e) => {
                            ekycData["aadharUpload"] = e.target.files[0].name;
                            setEkycData({ ...ekycData });
                          }}
                          accept="image/*,pdf;capture=camera"
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
                    setEkycData({ ...ekycData });
                  }}
                  onBlur={(e) => {
                    validate(2, "pan");
                  }}
                  error={error["pan"] != null}
                  helperText={
                    error["pan"]
                      ? error["pan"]
                      : ekycData["panUpload"]
                      ? `${ekycData["panUpload"]} uploaded successfully`
                      : ""
                  }
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
                          onChange={(e) => {
                            ekycData["panUpload"] = e.target.files[0].name;
                            setEkycData({ ...ekycData });
                          }}
                          accept="image/*, pdf;capture=camera"
                          type="file"
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
                !(
                  ekycData["pan"] != "" &&
                  ekycData["aadharEkyc"] != "" &&
                  ekycData["aadharUpload"] != "" &&
                  ekycData["pan"] != ""
                )
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
