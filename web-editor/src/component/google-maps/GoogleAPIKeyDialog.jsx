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
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = [
    {
      title: "Create GCP Project",
      description:
        "Create a new project in Google Cloud Platform by clicking the Create Project button. Name your project or leave it as default and click Create.",
    },
    {
      title: "Create Credntials",
      description:
        "Search Google maps platform on the search bar and click Create Credentials and select API Key.",
    },
    {
      title: "Restrict API Key",
      description:
        "Select HTTP referrer option. Click on Add Item and input your map URL.",
    },
    {
      title: "Enable Billing",
      description:
        "Search Billing on the search bar and configure your setting. Billing is required to use the API Key. You can learn more about billing in the Google Cloud Platform Pricing Guide.",
    },
  ];

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle onClose={() => setOpen(false)}>
          About Google Maps API Key
        </DialogTitle>
        <DialogContent>
          <HorizontalLinearStepper
            steps={steps}
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
          <Box sx={{ height: "24px" }} />

          <SimpleCard steps={steps} activeStep={activeStep} />
        </DialogContent>
        <DialogActions>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button
              color="inherit"
              disabled={activeStep === steps.length - 1}
              onClick={handleNext}
            >
              Next
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
};

function SimpleCard({ steps, activeStep }) {
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          image={require(`../../images/gcp_key_steps/step${
            activeStep + 1
          }.png`)}
          alt="Google Maps API Key"
        />
        <CardContent>
          <Typography>{steps[activeStep].description}</Typography>
        </CardContent>
      </Card>
    </>
  );
}

function HorizontalLinearStepper({ steps, activeStep }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label.title}>
              <StepLabel>{label.title}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
