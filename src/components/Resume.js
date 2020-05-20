import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavBar } from "./NavBar";
import colors from "./layouts";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#233",
    padding: "1em",
  },
  seperator: {
    margin: "0 auto",
    width: "2px",
    height: "50px",
    backgroundColor: "tan",
  },
  timeLineLeft: {
    display: "flex",
    flexDirection: 'column',
    width: "calc(50% + 1px)",
    alignItems: "center",
    padding: "0 0 0 2rem",
    borderTop: "1px solid tan",
  },
  timeLineRight: {
    display: "flex",
    flexDirection: 'column',
    width: "calc(50% + 1px)",
    alignItems: "center",
    padding: "0 2rem 0 0",
    borderTop: "1px solid tan",
    float: "right",
  },
  year: {
    backgroundColor: colors.primary,
    margin: "0 auto",
    padding: "0.5em",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavBar title="Resume" />
      <Box className={classes.container} component="header">
        <Typography
          align="center"
          variant="h5"
          style={{ color: "#fff", marginTop: "3em" }}
        >
          Education &amp; Working experience
        </Typography>
      </Box>
      <Typography className={classes.year} variant="h6">
        2016
      </Typography>
      <Box className={classes.seperator}></Box>
      <Box className={classes.timeLineLeft} component="div">
        <Typography style={{ color: colors.primary }}>
          Busoga College Mwiri
        </Typography>
        <Typography style={{ color: "#fff" }}>
          Uganda Advanced Certificate of Education (UACE), Physics, Maths and
          Economics.
        </Typography>
      </Box>
      <Box className={classes.seperator}></Box>
      <Typography className={classes.year} variant="h6">
        2017
      </Typography>
      <Box className={classes.seperator}></Box>
      <Box>
        <Box className={classes.timeLineRight} component="div">
          <Typography style={{ color: colors.primary }}>
            Lira University
          </Typography>
          <Typography style={{ color: "#fff" }}>
            Started Pursuing Bs. Computer Science at Lira University
          </Typography>
        </Box>
      </Box>

      <Box className={classes.seperator}></Box>
      <Typography className={classes.year} variant="h6">
        2018
      </Typography>
      <Box className={classes.seperator}></Box>
      <Box className={classes.timeLineLeft} component="div">
        <Typography style={{ color: colors.primary }}>
          Udacity Google Africa Challenge Scholarship by Google and Andela
        </Typography>
        <Typography style={{ color: "#fff" }}>
          Achieved Certifiacte in Front End Course (HTML/CSS/JS)
        </Typography>
      </Box>
      <Box className={classes.seperator}></Box>
      <Box>
        <Box className={classes.timeLineRight} component="div">
          <Typography style={{ color: colors.primary }}>
            Lead developer Lira University Association of Computing (LUAC) code
            studio
          </Typography>
          <Typography style={{ color: "#fff" }}>
            <p>
              <strong>Role:</strong> Develop and maintain the Association
              website
            </p>
            <p>
              <strong>Role:</strong> Lead sessions focused on teaching newbies
              computer programming
            </p>
          </Typography>
        </Box>
      </Box>
      <Box className={classes.seperator} />
      <Typography className={classes.year} variant="h6">
        2019
      </Typography>
      <Box className={classes.seperator} />
      <Box className={classes.timeLineLeft} component="div">
        <Typography style={{ color: colors.primary }}>
          Andela Learning Community Ambassador: May - August 2019
        </Typography>
        <Typography style={{ color: "#fff" }}>
          <p>
            <strong>Role:</strong> Provide on demand support for mentees. .Keep
            mentees accountable through weekly check-ins.
          </p>
          <p>
            <strong>Role:</strong> Weekly check-ins on mentees’ projects and
            deliverables.
          </p>
        </Typography>
      </Box>
      <Box className={classes.seperator} />
      <Box>
        <Box className={classes.timeLineRight} component="div">
          <Typography style={{ color: colors.primary }}>
            Lead Salesforce Student Group Lira University
          </Typography>
          <Typography style={{ color: "#fff" }}>
            <p>
              <strong>Role:</strong> Organise Meetups focused on but not limited
              to equiping students with salesforce skills
            </p>
          </Typography>
        </Box>
      </Box>
      <Box className={classes.seperator} />

      <Typography className={classes.year} variant="h6">
        Present
      </Typography>
      <Box className={classes.seperator} />
      <Box className={classes.timeLineLeft} component="div">
        <Typography style={{ color: colors.primary }}>
          Freelance React/React-Native Developer
        </Typography>
        <Typography style={{ color: "#fff" }}>
          <p>
            <strong>lutrade App (Personal Project):</strong> A mobile app that
            enables local restaurants to get an online presence and accept
            online orders.
            <p>Developed using React Native, Nodejs and Mongodb</p>
          </p>
          <p>
            <strong>Call Boda (Personal Project)</strong> A mobile app that
            enables one access a boda boda from the nearest boda stage
          </p>
        </Typography>
      </Box>
      <Box className={classes.seperator} />
    </div>
  );
};

export default Resume;
