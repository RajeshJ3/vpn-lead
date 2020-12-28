import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "0",
    backgroundColor: "#ffd11a",
    zIndex: "100",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
  },
  description: {
    lineHeight: 1.1,
  },
  icon: {
    position: "absolute",
    top: "15px",
    color: "#444",
    cursor: "pointer",
    right: "15px",
  },
}));

export default function Features() {
  const [display, setDisplay] = useState(true);
  const classes = useStyles();

  const handleClose = () => {
    setDisplay(false);
  };

  return (
    <section>
      {display ? (
        <>
          <br />
          <br />
          <br />
        </>
      ) : null}
      <Container
        className={classes.root}
        maxWidth="xl"
        style={display ? { display: "block" } : { display: "none" }}
      >
        <CloseIcon className={classes.icon} onClick={handleClose} />
        <Box pt={2} pb={1.5} textAlign="center">
          <Typography variant="h6" component="h2" gutterBottom={true}>
            Get 1 Day of Free Trial!
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.description}
          >
            <b><u><a href="#contact">Contact now</a></u></b> to get a full day of trial. Continue only If you
            like the service.
          </Typography>
        </Box>
      </Container>
    </section>
  );
}
