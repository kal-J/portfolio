import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import {
  Menu,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import avatar from "../components/avatar.png";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    path: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    path: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    path: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Hire me",
    path: "/contact",
  },
];

export const NavBar = (props) => {
  const [state, setstate] = useState({
    right: false,
  });
  const toggleSlider = (slider, open) => {
    setstate({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const sideList = (slider) => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Eric Kalujja" />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <Link style={{ textDecoration: "none" }} key={key} to={item.path}>
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                {item.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={item.listText}
              />
            </ListItem>
          </Link>
        ))}
      </List>
      <List>
        <a style={{ textDecoration: "none" }} href="https://github.com/kal-J">
          <ListItem button>
            <ListItemIcon className={classes.listItem}>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText className={classes.listItem} primary="Github" />
          </ListItem>
        </a>

        <a
          style={{ textDecoration: "none" }}
          href="https://twitter.com/kal_code"
        >
          <ListItem button>
            <ListItemIcon className={classes.listItem}>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText className={classes.listItem} primary="Twitter" />
          </ListItem>
        </a>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="fixed" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={() => toggleSlider("right", true)}>
              <Menu style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              {props.title}
            </Typography>
            <MobileRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={() => toggleSlider("right", false)}
            >
              {sideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};
