import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from 'services/api/constants';
import { getEmployees } from 'services/api/requests';

const useUserData = (payload: GetEmployeesPayload) =>
  useQuery([QUERY_KEYS.EMPLOYEES, payload], () => getEmployees(payload));

export default useUserData;
