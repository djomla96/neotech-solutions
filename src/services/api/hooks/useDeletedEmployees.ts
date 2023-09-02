import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from 'services/api/constants';
import { getDeletedEmployees } from 'services/api/requests';

const useDeletedEmployees = (payload: GetEmployeesPayload) =>
  useQuery([QUERY_KEYS.EMPLOYEES, payload], () => getDeletedEmployees(payload));

export default useDeletedEmployees;
