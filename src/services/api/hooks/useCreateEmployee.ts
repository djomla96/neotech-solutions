import { useMutation } from '@tanstack/react-query';

import { createEmployee } from 'services/api/requests';

const useCreateEmployee = () => useMutation(createEmployee);

export default useCreateEmployee;
