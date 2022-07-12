import { Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Route } from "./Route";

export const Routes = () => (
  <Switch>
    <Route exact path="/" Component={Login} />
    <Route path="/signup" Component={SignUp} />
  </Switch>
);
