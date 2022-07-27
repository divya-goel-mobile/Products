import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

import "./styles/basic-info.css";

export default function BasicInfo({
  basicData,
  setBasicData,
  error,
  validate,
}) {
  let navigate = useNavigate();

  const handleGenderChange = (event) => {
    basicData["gender"] = event.target.value;
    setBasicData({ ...basicData });
  };
  function next() {
    if (validate(1)) {
      navigate("../insuranceQuestionnaire");
    }
  }

  let [date, setDate] = useState(null);
  return (
    <section class="chat-container">
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">
              Great! Applying for health insurance takes only 5 minutes. Ready
              to go?
            </h3>
            <form autoComplete="off" className="bcuijq">
              <div className="text-question-container">
                <div className="question-form">
                  <div className="input-container  text">
                    <TextField
                      label="First Name"
                      variant="outlined"
                      error={error["firstName"] != null}
                      helperText={error["firstName"]}
                      onChange={(e) => {
                        basicData["firstName"] = e.target.value;
                        setBasicData({ ...basicData });
                      }}
                      required
                      fullWidth
                      spellCheck={false}
                    />
                  </div>
                  <div class="input-container  mt30 text">
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      error={error["lastName"] != null}
                      helperText={error["lastName"]}
                      onChange={(e) => {
                        basicData["lastName"] = e.target.value;
                        setBasicData({ ...basicData });
                      }}
                      fullWidth
                      spellCheck={false}
                    />
                  </div>
                </div>

                <div className="mt30">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      className="fullwidth"
                      label="Date of Birth"
                      value={date}
                      onChange={(newValue) => {
                        setDate(newValue);
                        basicData["dob"] = newValue;
                        setBasicData({ ...basicData });
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          error={error["dob"] != null}
                          helperText={error["dob"]}
                          fullWidth
                          required
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>

                <div className="mt30">
                  <FormControl required error={error["gender"] != null}>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      error={error["gender"] != null}
                      helperText={error["gender"]}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio onChange={handleGenderChange} />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio onChange={handleGenderChange} />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio onChange={handleGenderChange} />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
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
