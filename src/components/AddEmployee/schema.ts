import * as yup from 'yup';

import i18n from 'config/i18n';

const phoneRegExp = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

export const getValidationSchema = () =>
  yup.object({
    name: yup
      .string()
      .min(2, i18n.t('validation.name'))
      .required(
        i18n.t('validation.required', { field: i18n.t('general.name') }),
      ),
    email: yup
      .string()
      .email(i18n.t('validation.email'))
      .required(
        i18n.t('validation.required', { field: i18n.t('general.email') }),
      ),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, i18n.t('validation.phoneNumber'))
      .required(
        i18n.t('validation.required', { field: i18n.t('general.phoneNumber') }),
      ),
    dateOfEmployment: yup.date().required(
      i18n.t('validation.required', {
        field: i18n.t('general.dateOfEmployment'),
      }),
    ),
    dateOfBirth: yup.date().required(
      i18n.t('validation.required', {
        field: i18n.t('general.dateOfBirth'),
      }),
    ),
    city: yup
      .string()
      .required(
        i18n.t('validation.required', { field: i18n.t('general.city') }),
      ),
    zipCode: yup
      .string()
      .required(
        i18n.t('validation.required', { field: i18n.t('general.zipCode') }),
      ),
    address1: yup
      .string()
      .required(
        i18n.t('validation.required', { field: i18n.t('general.address1') }),
      ),
    address2: yup.string(),
  });
