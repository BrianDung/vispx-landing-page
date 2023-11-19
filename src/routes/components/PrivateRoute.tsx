import React, { useEffect } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { PATHS } from 'src/constants/paths';
import { hasStorageJwtToken } from 'src/helpers/storage';

export const PrivateRoute: React.FC<RouteProps> = (props) => {

  useEffect(() => {
    // const handlePrivateRouteWhenAccessTokenExpired = () => {
    //   history.push(PATHS.default);
    // };

    // eventBus.on(`access_token_expired`, handlePrivateRouteWhenAccessTokenExpired);

    return () => {
      // eventBus.remove(`access_token_expired`, handlePrivateRouteWhenAccessTokenExpired);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLogined = hasStorageJwtToken();

  if (!isLogined) {
    return (
      <Redirect
        to={{
          pathname: PATHS.default,
        }}
      />
    );
  }

  return <Route {...props} />;
};
