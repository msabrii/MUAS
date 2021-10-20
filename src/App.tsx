import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Committee from "./pages/Committee";
import Mudae from "./pages/Mudae";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" exact component={Events} />
          <Route path="/committee" exact component={Committee} />
          <Route path="/mudae" exact component={Mudae} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
