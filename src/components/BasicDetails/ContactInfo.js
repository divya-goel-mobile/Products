import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Email from "@mui/icons-material/Email";
import ContactPhone from "@mui/icons-material/ContactPhone";

export function ContactInfo() {
  return (
    <form autoComplete="off" class="bcuijq">
      <div class="text-question-container contact-info">
        <div class="question-form">
          <div class="input-container  text">
            <TextField
              id="filled-basic"
              label="Email"
              variant="outlined"
              required
              fullWidth
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
  );
}
