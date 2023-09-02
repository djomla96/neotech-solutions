import { getQueryParams } from './helpers';

import axios from 'config/axios';

export const getEmployees = async ({
  page,
  limit,
}: GetEmployeesPayload): Promise<GetEmployeesResponse> => {
  const queryParams = getQueryParams({
    page,
    limit,
  });

  const { data } = await axios.get(`/employees?${queryParams}`);

  return data;
};

export const getDeletedEmployees = async ({
  page,
  limit,
}: GetEmployeesPayload): Promise<GetEmployeesResponse> => {
  const queryParams = getQueryParams({
    page,
    limit,
  });

  const { data } = await axios.get(`/employees/deleted?${queryParams}`);

  return data;
};

export const createEmployee = async (payload: Employee): Promise<void> => {
  const { data } = await axios.post('/employees', payload);

  return data;
};
