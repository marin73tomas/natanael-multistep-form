import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useSelector } from "react-redux";
import TwoChoicesForm from "./TwoChoicesForm";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";

const steps = ["Scheduling Mode", "How you're paid", "Business Info"];

const MultiStepForm = ({ classes }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isError, setError] = React.useState("");

  const allowedSteps = useSelector((state) => state.allowedSteps);

  const renderStep = () => {
    if (activeStep == 0)
      return (
        <>
          <h2>Scheduling Mode</h2>
          <TwoChoicesForm
            currentStepNumber={activeStep}
            classes={classes}
            firstChoiceData={{
              title: "Public",
              description:
                "Customers can see what free time you have available, they pick a time and book. Less work.",
              value: "1",
            }}
            secondChoiceData={{
              title: "Private ",
              description:
                "Customers request a time for scheduling, you choose what times to offer them. More privacy.",
              value: "2",
            }}
          />
        </>
      );

    if (activeStep == 1)
      return (
        <>
          <h2>How you're paid</h2>
          <TwoChoicesForm
            currentStepNumber={activeStep}
            classes={classes}
            firstChoiceData={{
              title: "Per session",
              description:
                "You're paid every time your customer sees you, like plumbers, psychologists, physiotherapists.",
              value: "3",
            }}
            secondChoiceData={{
              title: "Private ",
              description:
                "Your customers pay you periodically. Monthly, quarterly, yearly, etc.",
              value: "4",
            }}
          />
        </>
      );
    //if (activeStep == 2)
  };

  const handleNext = () => {
    setError("")
    if (allowedSteps[activeStep] == false) {
      //if the user is not allowed to click next
      if (activeStep == 0)
        setError("Please select one of the cards to continue.");
      if (activeStep == 1)
        setError("Please select one of the cards to continue.");
      if (activeStep == 2) setError("Please fill all fields to continue.");
      
      return;
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {isError && (
        <Fade in={true}>
          <Alert
            severity="error"
            className={classes.error}
            onClose={(event) =>
              setError("")
            }
          >
            {isError}
          </Alert>
        </Fade>
      )}
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
      {renderStep()}
    </Box>
  );
};

export default MultiStepForm;
