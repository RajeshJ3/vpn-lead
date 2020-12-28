import { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Contact(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    console.log(props, success);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
    .post(`https://api.99coupons.ml/send-vpn/mail/`, {
      firstName,
      lastName,
      email,
      mobile,
      requirements,
    })
    .then(() => {
        props.setActiveStep(2);
        setSuccess(true);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                autoFocus
                fullWidth
                size="small"
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                size="small"
                id="mobile"
                label="WhatsApp Number"
                name="mobile"
                autoComplete="mobile"
                type="text"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                multiline
                rows={4}
                fullWidth
                size="small"
                id="requirements"
                label="Requirements"
                name="requirements"
                autoComplete="requirements"
                type="text"
                value={requirements}
                onChange={(e) => {
                  setRequirements(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            size="small"
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading || success ? true : false}
          >
            {loading ? "Loading.." : success ? "Success" : "Post Requirements"}
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Contact;
