import { useMutation } from '@tanstack/react-query';

import queryClient from 'config/queryClient';
import { QUERY_KEYS } from 'services/api/constants';
import { deleteEmployee } from 'services/api/requests';

const useDeleteEmployee = () =>
  useMutation(deleteEmployee, {
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEYS.EMPLOYEES]),
  });

export default useDeleteEmployee;
