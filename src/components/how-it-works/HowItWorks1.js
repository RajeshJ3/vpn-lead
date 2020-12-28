import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Contact from "./Contact";
import EmailSent from "./EmailSent";

const useStyles = makeStyles((theme) => ({
  stepper: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(4),
      paddingBottom: 0,
      flexDirection: "column",
      alignItems: "start",
    },
  },
  step: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
  container: {
    paddingBottom: "20px",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2),
    },
  },
  media: {
    height: "256px",
  },
}));

export default function HowItWorks(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const content = {
    header: "Contact Us",
    step1: "Set-up GCP billing account",
    step2: "Post your Requirements",
    step3: "Enjoy VPN Lifetime ",
    subheader: "Create GCP billing account!",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
    ...props.content,
  };

  return (
    <section>
      <Box pt={8} pb={10}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={5}>
            <Typography variant="h4" component="h2" gutterBottom={true}>
              {content["header"]}
            </Typography>
          </Box>
          <Box bgcolor="background.paper" className={classes.container}>
            <Stepper activeStep={activeStep} className={classes.stepper} id="contact">
              <Step key={content["step1"]} className={classes.step}>
                <StepLabel>{content["step1"]}</StepLabel>
              </Step>
              <Step key={content["step12"]} className={classes.step}>
                <StepLabel>{content["step2"]}</StepLabel>
              </Step>
              <Step key={content["step3"]}>
                <StepLabel>{content["step3"]}</StepLabel>
              </Step>
            </Stepper>
            {activeStep === 0 ? (
              <Box p={4}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" height="100%">
                      <Box my="auto">
                        <Typography
                          variant="h4"
                          component="h2"
                          gutterBottom={true}
                        >
                          {content["subheader"]}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          paragraph={true}
                        >
                          Create your{" "}
                          <a href="https://cloud.google.com/" target="_blank">
                            GCP
                          </a>{" "}
                          account and setup billing details. Don't worry, you
                          won't be charged anything until you use.
                          <br />
                          <br />
                          <b>
                            Are you facing problems, in setting up your GCP
                            account?
                          </b>
                          <br />
                          Don't worry, just continue, we'll do It for you. Don't
                          forget to mention this in your requirement post.
                        </Typography>
                        <br />
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            setActiveStep(1);
                          }}
                          className={classes.primaryAction}
                        >
                          Continue
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card>
                      <CardActionArea href="#">
                        <CardMedia
                          className={classes.media}
                          image={content["image"]}
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            ) : activeStep === 1 ? (
              <Contact setActiveStep={setActiveStep} />
            ) : <EmailSent />}
          </Box>
        </Container>
      </Box>
    </section>
  );
}
