import React from "react";
import logo from "./logo.svg";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Teams from "./components/teams";
import Nav from "./components/navbar";
import Home from "./components/home";
import MyTeams from "./components/myteams";
import Signup from './components/signup';
import Login from "./components/login";
import UserProfile from "./components/userprofile";
import TeamProfile from "./components/teamprofile";
import TeamRegister from "./components/teamregister";

function App() {
  return (
    <div>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/teams">
          <Teams />
        </Route>

        <Route path="/myteams">
          <MyTeams />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
            
        <Route path="/userprofile">
          <UserProfile />
        </Route>
            
        <Route path="/teamprofile">
          <TeamProfile />
        </Route>

        <Route path="/teamregister">
          <TeamRegister />
        </Route>

        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
