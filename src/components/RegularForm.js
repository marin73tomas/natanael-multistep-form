import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import ReactPhoneInput from "react-phone-input-material-ui";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
const RegularForm = ({ title, currentStepNumber, classes, submitBtnText }) => {
  const [companyName, setCompanyName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    //here is where you take care of the data to be sent to the server

    const data = {
      //object that hold all the data
      companyName,
      ownerName,
      email,
      phone,
    };

    //if succesfully sent to the server then allow step 3 to be completed
    if (true) {
      dispatch({
        type: "allowStep",
        payload: { stepNumber: currentStepNumber + 1 },
      });
    }

    console.log(data);
  };

  return (
    <Box component="form" className={classes.regularForm}>
      <Box component="div">
        <Box component="div" classes={classes.formNameContainer}>
          <label htmlFor="Company Name">Company Name</label>
          <TextField
            id="Company Name"
            name="Company Name"
            type="text"
            required
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Box>
        <Box component="div">
          <label htmlFor="Owner Name" classes={classes.formNameContainer}>
            Owner Name
          </label>
          <TextField
            id="Owner Name"
            name="Owner Name"
            type="text"
            required
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Box>
        <Box component="div">
          <label htmlFor="phone">Phone</label>
          <ReactPhoneInput
            onChange={(value) => setPhone(value)} // passed function receives the phone value
            component={TextField}
            required
          />
        </Box>
        <Box component="div">
          <label htmlFor="Email">Email</label>
          <TextField
            id="Email"
            name="email"
            type="email"
            required
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        className={`${classes.btn} ${classes.btnPrimary}`}
        onClick={handleSubmit}
      >
        {submitBtnText}
      </Button>
    </Box>
  );
};

export default RegularForm;
