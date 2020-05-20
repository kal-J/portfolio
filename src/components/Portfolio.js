import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavBar } from "./NavBar";
import { Box, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#233",
    padding: "1em",
    marginTop: "4em",
  },
  skills: {
    margin: "1em 2em",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "1em",
    },
  },
  projectImg: {
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  description: {
    [theme.breakpoints.down("sm")]: {
      color: "#fff",
      padding: "1em",
    },
    [theme.breakpoints.up("sm")]: {
      color: "#fff",
      padding: "1em 20%",
    },
  },
  hero: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      margin: "0 25%",
    },
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar title="Portfolio" />
      <Box className={classes.container} component="div">
        <Typography align="center" variant="h4" style={{ color: "#fff" }}>
          SKILLS
        </Typography>
      </Box>
      <Box className={classes.skills} component="div">
        <img
          src="/skills-images/html-css-javascript.jpg"
          className={classes.hero}
          alt="html-css-js"
        />
        <img
          src="/skills-images/mern.png"
          className={classes.hero}
          alt="mern stack"
        />
      </Box>
      <Box className={classes.container} component="div">
        <Typography align="center" variant="h4" style={{ color: "#fff" }}>
          PROJECTS
        </Typography>
      </Box>
      <Box component="div">
        <Typography align="center" variant="h6" style={{ color: "#fff" }}>
          1. lutrade
        </Typography>
        <Typography align="center" className={classes.description}>
          An android app that enables local restaurants get online and accept
          online orders. Built using React-Native. It uses Auth0 for
          Authentication, node + mogodb for the backend
        </Typography>
        <Typography align="center" style={{ padding: "1em" }}>
          <a
            href="https://github.com/kal-J/campus-food-app"
            style={{ color: "tomato" }}
          >
            Check out the project on GitHub
          </a>
        </Typography>
      </Box>
      <Box
        className={classes.skills}
        style={{ display: "flex", justifyContent: "center" }}
        component="div"
      >
        <LazyLoadImage
          alt="lutrade app screenshots"
          src="/lutrade-images/lutrade.png"
          className={classes.projectImg}
          placeholder={<Skeleton variant="rect" width={210} height={118} />}
        />
      </Box>

      <Box component="div">
        <Typography
          align="center"
          variant="h6"
          style={{ color: "#fff", paddingTop: "2em" }}
        >
          2. call Boda
        </Typography>
        <Typography align="center" className={classes.description}>
          An android app that enables one call a boda from the nearest stage
          when they need one. It enables people in communities to easily access
          transport through providing a single place to access transport
          services. Built using React-Native. It uses node + mogodb for the
          backend
        </Typography>
        <Typography align="center" style={{ padding: "1em" }}>
          <a
            href="https://github.com/kal-J/callBoda"
            style={{ color: "tomato" }}
          >
            Check out the project on GitHub
          </a>
        </Typography>
      </Box>
      <Box
        style={{ display: "flex", justifyContent: "center" }}
        className={classes.skills}
        component="div"
      >
        <img
          src="/callboda/callboda.gif"
          className={classes.projectImg}
          alt="callboda demo"
        />
      </Box>
    </>
  );
};

export default Portfolio;
