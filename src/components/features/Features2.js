import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import StorageIcon from "@material-ui/icons/Storage";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShutterSpeedIcon from "@material-ui/icons/ShutterSpeed";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginBottom: theme.spacing(1),
  },
}));

export default function Features(props) {
  const classes = useStyles();

  const content = {
    "col1-header": "Dedicated Servers",
    "col1-desc":
      "We are using Google Cloud Platform (GCP), Amazon Web Services (AWS) and other such highly reliable platforms to your servers to host, with 99.9% up and running time.",
      
      "col2-header": "No latency",
      "col2-desc":
      "Servers are located in countries having 1Gbps+ data transfer speeds. You are never going to experience any delay/lag/latency in your gameplay.",

      "col3-header": "Browse Privately",
      "col3-desc":
        "No Logs of your browing is ever been going to be saved. Stay secure in public WiFi's and remain Anonymous.",
    
      "col4-header": "Affordable",
      "col4-desc": "After one time setup fee of Rs. 399, You have to pay pannies monthly for the server to keey going. Eg. 6-8hrs of daily Gaming, your monthly bill will be ~ Rs. 29",
      
      ...props.content,
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={8} textAlign="center">
          <Typography variant="h4" component="h2" gutterBottom={true}>
            What are the Benefits?
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">Benefits are countless. But, some of these are widely experienced.</Typography>
        </Box>
        <Box py={6}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <StorageIcon
                color="primary"
                fontSize="large"
                className={classes.icon}
              />
              <Typography variant="h6" component="h3" gutterBottom={true}>
                {content["col1-header"]}
              </Typography>
              <Typography variant="body1" component="p">
                {content["col1-desc"]}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <ShutterSpeedIcon
                color="primary"
                fontSize="large"
                className={classes.icon}
              />
              <Typography variant="h6" component="h3" gutterBottom={true}>
                {content["col2-header"]}
              </Typography>
              <Typography variant="body1" component="p">
                {content["col2-desc"]}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <VerifiedUserIcon
                color="primary"
                fontSize="large"
                className={classes.icon}
              />
              <Typography variant="h6" component="h3" gutterBottom={true}>
                {content["col3-header"]}
              </Typography>
              <Typography variant="body1" component="p">
                {content["col3-desc"]}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <AttachMoneyIcon
                color="primary"
                fontSize="large"
                className={classes.icon}
              />
              <Typography variant="h6" component="h3" gutterBottom={true}>
                {content["col4-header"]}
              </Typography>
              <Typography variant="body1" component="p">
                {content["col4-desc"]}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
