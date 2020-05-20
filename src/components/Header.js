import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "./avatar.png";
import ReactTyped from "react-typed";

// styling
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Eric Kalujja" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <ReactTyped strings={["Hi, I'm Eric Kalujja"]} typeSpeed={70} />
      </Typography>
      <br />
      <Typography className={classes.title} variant="h6">
        <ReactTyped strings={["WEB/MOBILE DEVELOPER"]} typeSpeed={100} />
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
        <ReactTyped
          strings={["React Js", "React Native", "Node (Express)", "MERN STACK"]}
          typeSpeed={120}
          backSpeed={30}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
