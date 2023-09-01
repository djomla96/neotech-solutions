import { lazy } from 'react';
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';

import { ROUTES } from 'routes/constants';

const DefaultRoute = lazy(() => import('./DefaultRoute/DefaultRoute'));

const Employees = lazy(() => import('pages/Employees/Employees'));

const Routes = () => (
  <ReactRouterRoutes>
    <Route element={<Employees />} path={ROUTES.employees} />

    <Route element={<DefaultRoute />} path="*" />
  </ReactRouterRoutes>
);

export default Routes;
