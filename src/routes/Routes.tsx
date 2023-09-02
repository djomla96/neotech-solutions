import { lazy } from 'react';
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';

import { ROUTES } from 'routes/constants';

const DefaultRoute = lazy(() => import('./DefaultRoute/DefaultRoute'));

const DeletedEmployees = lazy(
  () => import('pages/DeletedEmployees/DeletedEmployees'),
);
const Employees = lazy(() => import('pages/Employees/Employees'));

const Routes = () => (
  <ReactRouterRoutes>
    <Route element={<DeletedEmployees />} path={ROUTES.deletedEmployees} />
    <Route element={<Employees />} path={ROUTES.employees} />

    <Route element={<DefaultRoute />} path="*" />
  </ReactRouterRoutes>
);

export default Routes;
