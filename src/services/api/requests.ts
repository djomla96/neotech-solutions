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

export const getEmployee = async (id: string): Promise<Employee> => {
  const { data } = await axios.get(`/employees/id/${id}`);

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

export const createEmployee = async (
  payload: EmployeePayload,
): Promise<void> => {
  const { data } = await axios.post('/employees', payload);

  return data;
};

export const updateEmployee = async ({
  payload,
  id,
}: UpdateEmployeePayload): Promise<void> => {
  const { data } = await axios.patch(`/employees/${id}`, payload);

  return data;
};

export const deleteEmployee = async (id: string): Promise<void> => {
  const { data } = await axios.delete(`/employees/soft-delete/${id}`);

  return data;
};
