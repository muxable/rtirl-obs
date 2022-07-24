import * as React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

export const GoogleAPIKeyDialog = ({ open, setOpen }) => {
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle onClose={() => setOpen(false)}>
          About Google Maps API Key
        </DialogTitle>
        <DialogContent>
          <HorizontalLinearStepper />
          <SimpleCard />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};

function SimpleCard({ imagePath, description }) {
  description =
    "This is a simple card. You can use this card to display some information.";
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          image={require("../../images/gcp_key_steps/step1.png")}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

// const steps = [
// 	{
// 		title: "Create GCP Project",
// 		description: "Create a new project in Google Cloud Platform by clicking the Create Project button. Name your project or leave it as default and click Create.",
// 	},
// 	{
// 		title: "Create Credntials",
// 		description: "qewr",
// 	},
// 	{
// 		title: "Create API Key",
// 		description: "qewr",
// 	},
// 	{
// 		title: "Enable Billing",
// 		description: "qewr",
// 	}
// ]
const steps = [
  "Create GCP Project",
  "Create Credentials",
  "Create API Key",
  "Enabled Billing",
];

function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
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
    </Box>
  );
}
