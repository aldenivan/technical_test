import { Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Route } from "./Route";

export const Routes = () => (
  <Switch>
    <Route exact path="/" Component={Login} />
    <Route path="/signup" Component={SignUp} />
    <Route exact path="/dashboard" Component={Dashboard} isPrivate />
  </Switch>
);
