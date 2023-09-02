import { employees } from './mocks';

import * as api from 'services/api/requests';

export const getEmployees = jest.spyOn(api, 'getEmployees').mockResolvedValue({
  count: employees.length,
  employees,
});
