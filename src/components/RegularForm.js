import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import ReactPhoneInput from "react-phone-input-material-ui";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";


const RegularForm = ({ title, currentStepNumber, classes, submitBtnText }) => {
  const [companyName, setCompanyName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isError, setError] = React.useState("");

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
    if (!(companyName && ownerName && email && phone)){
      setError("Please fill all inputs to continue.")
     
      return
    }



      if (true) {
        //if succesfully sent to the server then allow step 3 to be completed
        dispatch({
          type: "allowStep",
          payload: { stepNumber: currentStepNumber + 1 },
        });
      }

    console.log(data);
  };

  return (
    <Box component="form" className={classes.regularForm} noValidate>
      {isError && (
        <Fade in={true}>
          <Alert
            severity="error"
            className={classes.error}
            onClose={(event) => setError("")}
            style={{ position: "fixed", top: "30px", zIndex: "999" }}
          >
            {isError}
          </Alert>
        </Fade>
      )}
      <Box component="div">
        <Box component="div" sx={{ width: "48%" }}>
          <label htmlFor="Company Name">Company Name</label>
          <TextField
            sx={{ width: 1 }}
            id="Company Name"
            required
            name="Company Name"
            type="text"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Box>
        <Box component="div" sx={{ width: "50%" }}>
          <label htmlFor="Owner Name">Owner Name</label>
          <TextField
            sx={{ width: 1 }}
            required
            id="Owner Name"
            name="Owner Name"
            type="text"
            required
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </Box>
        <Box component="div" sx={{ width: 1 }}>
          <label htmlFor="phone">Phone</label> 
          <ReactPhoneInput
            onChange={(value) => setPhone(value)} // passed function receives the phone value
            component={TextField}
            required
            sx={{ width: 1 }}
          />
        </Box>
        <Box component="div" sx={{ width: 1 }}>
          <label htmlFor="Email">Email</label>
          <TextField
            sx={{ width: 1 }}
            id="Email"
            name="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
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
