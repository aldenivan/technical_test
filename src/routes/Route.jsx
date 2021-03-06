import { Redirect, Route as ReactRoute } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const Route = ({ isPrivate = false, Component, ...rest }) => {
  const { accessToken } = useAuth();

  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!accessToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};
