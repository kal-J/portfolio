import React, { useState } from "react";
import emailjs from "emailjs-com";
import keys from "./keys";
import { NavBar } from "./NavBar";
import {
  Paper,
  TextField,
  Box,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import "./contact.css";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#D2B48C",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  form: {
    width: "40%",
    margin: "6em auto",
    padding: "2em",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      margin: "6em auto",
      width: "80%",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!(name !== "" && email !== "" && message !== "")) {
      setError("correct errors in your inputs");
      return;
    } else {
      setError(null);
    }

    const templateParams = {
      user_name: name,
      user_email: email,
      user_message: message,
    };

    emailjs
      .send(keys.SERVICE_ID, keys.TEMPLATE_ID, templateParams, keys.USER_ID)
      .then(
        function (response) {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
          setError(null);
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
          setSuccess(false);
          setError("sending failed. try again");
        }
      );
  };
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <NavBar title="Hire me" />
      <Paper className={classes.form}>
        <form autoComplete="off" onSubmit={sendEmail}>
          {error !== null ? <Alert severity="error">{error}</Alert> : null}
          {success === true ? (
            <Alert severity="success">success. message sent</Alert>
          ) : null}
          <Box component="div">
            <TextField
              required
              id="Name"
              label="Name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              color="secondary"
            />
          </Box>
          <br />
          <Box component="div">
            <TextField
              required
              id="Email"
              label="Email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              color="secondary"
            />
          </Box>
          <br />
          <Box component="div">
            <TextField
              id="Message"
              label="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              multiline
              rows={6}
              variant="outlined"
              color="secondary"
            />
          </Box>
          <br />
          <input className="button-submit" type="submit" value="Send" />
        </form>
      </Paper>
    </MuiThemeProvider>
  );
};

export default Contact;
