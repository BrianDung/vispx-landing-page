import loadable, { DefaultComponent } from '@loadable/component';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PATHS } from 'src/constants/paths';
import { PrivateRoute } from './components/PrivateRoute';
import { Skeleton } from 'antd';


function loadableWFallback(loadFn: (props: {}) => Promise<DefaultComponent<{}>>) {
  return loadable(loadFn, {
    fallback: <Skeleton  paragraph={{
      rows: 20
    }}/>,
  });
}

const NotFound = loadableWFallback(() => import('./components/NotFound'));
const HomePageComponent = loadableWFallback(() => import('../pages/home'));


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={PATHS.default} component={HomePageComponent} />
      <PrivateRoute exact path={PATHS.notFound} component={NotFound} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
