import loadable, { DefaultComponent } from '@loadable/component';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { PATHS } from 'src/constants/paths';
import { PrivateRoute } from './components/PrivateRoute';
import { LoadingPage } from './components/LoadingPage';

const LoadingByTemplate: React.FC = () => {
  const history = useHistory();

  if (history.location.pathname.includes(PATHS.borrow)) {
    return <LoadingPage />;
  }
  if (history.location.pathname.includes(PATHS.forum)) {
    return <LoadingPage />;
  }
  if (history.location.pathname.includes(PATHS.lend)) {
    return <LoadingPage />;
  }
  if (history.location.pathname.includes(PATHS.stake)) {
    return <LoadingPage />;
  }
  return <LoadingPage />;
};

function loadableWFallback(loadFn: (props: {}) => Promise<DefaultComponent<{}>>) {
  return loadable(loadFn, {
    fallback: <LoadingByTemplate />,
  });
}

const NotFound = loadableWFallback(() => import('./components/NotFound'));


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={PATHS.default} component={NotFound} />
      <PrivateRoute exact path={PATHS.notFound} component={NotFound} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
