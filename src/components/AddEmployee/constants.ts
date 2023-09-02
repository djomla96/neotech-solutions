import dayjs from 'dayjs';

export const initialValues = {
  email: '',
  name: '',
  phoneNumber: '',
  dateOfEmployment: dayjs(),
  dateOfBirth: dayjs().subtract(18, 'y'),
  city: '',
  zipCode: '',
  address1: '',
  address2: '',
};
