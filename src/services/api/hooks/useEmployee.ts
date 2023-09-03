import { useQuery } from '@tanstack/react-query';

import { UseQueryLocalOptions } from 'config/queryClient';
import { QUERY_KEYS } from 'services/api/constants';
import { getEmployee } from 'services/api/requests';

const useEmployee = (id: string, options?: UseQueryLocalOptions<Employee>) =>
  useQuery([QUERY_KEYS.EMPLOYEES, id], () => getEmployee(id), options);

export default useEmployee;
