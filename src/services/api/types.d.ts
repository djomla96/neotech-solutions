interface GetEmployeesPayload {
  page: number;
  limit: number;
}

interface GetEmployeesResponse {
  count: number;
  employees: Employee[];
}

interface HomeAddress {
  city: string;
  ZIPCode: string;
  addressLine1: string;
  addressLine2: string;
}

interface Employee {
  name: string;
  email: string;
  phoneNumber: string;
  homeAddress: HomeAddress;
  dateOfEmployment: string;
  dateOfBirth: string;
}

type QueryParamType = string | number | boolean | undefined;
