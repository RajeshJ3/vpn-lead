import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "300px",
  },
  container: {
    position: "relative",
    height: "80%",
  },
  box: {
    backgroundColor: "#fafafa",
    position: "absolute",
    top: "50%",
    minWidth: "85%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "15px",
    borderRadius: "5px",
  },
}));

function EmailSent(props) {
  const classes = useStyles();

  useEffect(() => {
    if (props.isAuthenticated) {
      window.location.replace("/");
    }
  });

  return (
    <div className={classes.root}>
      <Container className={classes.container} component="main" maxWidth="xs">
        <Box mt={5} className={classes.box}>
          <Typography
            variant="h5"
            color="textSecondary"
            style={{ color: "#2eb82e" }}
          >
            E-mail Successfully Sent!
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary">
            Our technician will contact you as soon as we receive your e-mail.
            <br />
            <br />
            <b>Thank You and Regards</b>
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default EmailSent;
