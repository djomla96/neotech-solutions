import { useMutation } from '@tanstack/react-query';

import queryClient from 'config/queryClient';
import { QUERY_KEYS } from 'services/api/constants';
import { createEmployee } from 'services/api/requests';

const useCreateEmployee = () =>
  useMutation(createEmployee, {
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEYS.EMPLOYEES]),
  });

export default useCreateEmployee;
