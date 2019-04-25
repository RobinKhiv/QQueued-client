import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../../Routes/LandingRoute/LandingRoute";
import Login from "../../Routes/LoginRoute/LoginRoute";
import Registration from "../../Routes/RegistrationRoute/RegistrationRoute";
import Header from "../Header/Header";
import NotFoundRoute from "../../Routes/NotFoundRoute/NotFoundRoute";
import WaitingRoom from "../../Routes/WaitingRoomRoute/WaitingRoom";
import MessageRoute from "../../Routes/MessageRoute/MessageRoute";
import StudentQueue from "../../Routes/StudentDashboard/StudentQueue";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main role="main">
          <Switch>
            <Route exact path={"/"} component={Landing} />
            <Route path={"/login"} component={Login} />
            <Route path={"/register"} component={Registration} />
            <Route path={"/waiting-room"} component={WaitingRoom} />
            <Route exact path={"/message"} component={MessageRoute} />
            <Route exact path={"/waiting-list"} component={StudentQueue} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
