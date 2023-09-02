interface GetEmployeesPayload {
  page: number;
  limit: number;
}

interface GetEmployeesResponse {
  count: number;
  employees: Employee[];
}

interface HomeAddress {
  addressLine2: string;
  addressLine1: string;
  ZIPCode: string;
  city: string;
  _id: string;
}

interface Employee {
  _id: string;
  deletedAt?: string;
  isDeleted: boolean;
  dateOfBirth: string;
  dateOfEmployment: string;
  homeAddress: HomeAddress;
  phoneNumber: string;
  email: string;
  name: string;
  __v: number;
}

interface EmployeePayload {
  dateOfBirth: string;
  dateOfEmployment: string;
  homeAddress: Omit<HomeAddress, '_id'>;
  phoneNumber: string;
  email: string;
  name: string;
}

type QueryParamType = string | number | boolean | undefined;
