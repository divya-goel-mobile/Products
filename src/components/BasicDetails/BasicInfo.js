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
import "./basic-info.css";

export function BasicInfo({ basicData, setBasicData, error }) {
  const handleGenderChange = (event) => {
    basicData["gender"] = event.target.value;
    setBasicData({ ...basicData });
  };

  let [date, setDate] = useState(null);
  return (
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
                debugger;
                basicData["firstName"] = e.target.value;
                setBasicData({ ...basicData });
              }}
              required
              fullWidth
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
                  error={error["dob"] != null}
                  helperText={error["dob"]}
                  fullWidth
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </div>

        <div className="mt30">
          <FormControl>
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
  );
}
