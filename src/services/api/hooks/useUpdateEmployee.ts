import { useMutation } from '@tanstack/react-query';

import queryClient from 'config/queryClient';
import { QUERY_KEYS } from 'services/api/constants';
import { updateEmployee } from 'services/api/requests';

const useUpdateEmployee = () =>
  useMutation(updateEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.EMPLOYEES]);
    },
  });

export default useUpdateEmployee;
