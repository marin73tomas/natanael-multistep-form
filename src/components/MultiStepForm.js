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
import RegularForm from "./RegularForm";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import Card from "@mui/material/Card";
import { Container } from "@mui/material";

const steps = ["Scheduling Mode", "How you're paid", "Business Info"];

const MultiStepForm = ({ classes }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isError, setError] = React.useState("");

  const allowedSteps = useSelector((state) => state.allowedSteps);

  const renderStep = () => {
    if (activeStep == 0)
      return (
        <>
          <FormHeader classes={classes} title="Scheduling Mode" />
          <div className={classes.formWrapper}>
            <TwoChoicesForm
              title="Scheduling Mode"
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
          </div>
          <FormFooter classes={classes} />
        </>
      );
    if (activeStep == 1)
      return (
        <>
          <FormHeader classes={classes} title="How you're paid" />
          <div className={classes.formWrapper}>
            <TwoChoicesForm
              title="How you're paid"
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
          </div>
          <FormFooter classes={classes} />
        </>
      );
    if (activeStep == 2)
      return (
        <>
          <FormHeader classes={classes} title="Business Info" />
          <div className={classes.formWrapper}>
            <RegularForm
              title="Business Info"
              currentStepNumber={activeStep}
              classes={classes}
              submitBtnText="Create Account"
            />
          </div>
          <FormFooter classes={classes} />
        </>
      );
  };

  const handleNext = () => {
    setError("");
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
    <Container maxWidth="md" style={{position: "relative"}}>
   
        {isError && (
          <Fade in={true}>
            <Alert
              severity="error"
              className={classes.error}
              onClose={(event) => setError("")}
              style={{ position: "absolute", top: "30px", width: "93%" }}
            >
              {isError}
            </Alert>
          </Fade>
        )}
        <Stepper activeStep={activeStep} className= {classes.stepper}>
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
        <Card className={classes.formCard}>{renderStep()}</Card>

    </Container>
  );
};

export default MultiStepForm;
