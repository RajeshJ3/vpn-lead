import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  switchOrder1: {
    [theme.breakpoints.up('md')]: {
      order: 1,
    }
  },
  switchOrder0: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'right',
      order: 0,
    }
  },
  stepContainer: {
    marginBottom: theme.spacing(4),
  },
  box:{
    padding: "0px 50px",
    [theme.breakpoints.down('sm')]: {
    padding: "20px 0px",
    }
  },
  media: {
    height: '256px',
  },
}));

export default function HowItWorks(props) {
  const classes = useStyles();
  
  const content = {
    'image1': './mui-assets/howItWorks/1.jpg',
    'step1': 'Select Region',
    'step1-desc': 'Select from a wide range of servers located in various parts of the world, Eg. Oregon (US), Iowa (US), South Carolina (US), etc.',

    'image2': './mui-assets/howItWorks/2.jpg',
    'step2': 'Integrate Software',
    'step2-desc': 'Our Technician will in person create a VPN Server for you, Be prepared with Google Cloud Platform (GCP) setup with billing.',
    
    'image3': './mui-assets/howItWorks/3.jpg',
    'step3': 'Get Set Go',
    'step3-desc': 'Now the whole Internet is yours, Do whatever you want. Play online games with seemless experience.',

    ...props.content
  };

  return (
    <section>
      <Container maxWidth="sm">
        <Box pt={8} textAlign="center">
          <Typography variant="h4" component="h2" gutterBottom={true}>How to get started?</Typography>
          <Typography variant="subtitle1" color="textSecondary">Are you facing <b>Latency</b> (high PING) issues with Public VPNs.</Typography>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box pt={8} pb={10}>
          <Grid container className={classes.stepContainer}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardActionArea href="#">
                  <CardMedia className={classes.media} image={content['image1']} />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box className={classes.box} my="auto">
                  <Typography variant="h2" component="h3">01</Typography>
                  <Typography variant="h4" component="h2" gutterBottom={true}>{content['step1']}</Typography>
                  <Typography variant="body1" color="textSecondary" paragraph={true}>{content['step1-desc']}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container className={classes.stepContainer}>
            <Grid item xs={12} md={6} className={classes.switchOrder1}>
              <Card>
                <CardActionArea href="#">
                  <CardMedia className={classes.media} image={content['image2']} />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} className={classes.switchOrder0}>
              <Box display="flex" height="100%">
                <Box className={classes.box} my="auto">
                  <Typography variant="h2" component="h3">02</Typography>
                  <Typography variant="h4" component="h2" gutterBottom={true}>{content['step2']}</Typography>
                  <Typography variant="body1" color="textSecondary" paragraph={true}>{content['step2-desc']}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Card>
                <CardActionArea href="#">
                  <CardMedia className={classes.media} image={content['image3']} />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box className={classes.box} my="auto">
                  <Typography variant="h2" component="h3">03</Typography>
                  <Typography variant="h4" component="h2" gutterBottom={true}>{content['step3']}</Typography>
                  <Typography variant="body1" color="textSecondary" paragraph={true}>{content['step3-desc']}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}