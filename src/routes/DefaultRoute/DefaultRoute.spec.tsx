import DefaultRoute from './DefaultRoute';

import { ROUTES } from 'routes/constants';
import renderComponent from 'testing/renderComponent';

describe('<DefaultRoute />', () => {
  it('should navigate to home page', () => {
    renderComponent(<DefaultRoute />);

    expect(window.location.pathname).toBe(ROUTES.employees);
  });
});
