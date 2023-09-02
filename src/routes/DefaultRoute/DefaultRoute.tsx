import { Navigate } from 'react-router-dom';

import { ROUTES } from 'routes/constants';

const DefaultRoute = () => <Navigate replace to={ROUTES.employees} />;

export default DefaultRoute;
