import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import "./App.css";
import Home from "./components";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/meet-kal" render={() => {
        return <Redirect to="https://meet.google.com/ntx-kojj-ozm" />
      }} />
    </>
  );
}

export default App;
