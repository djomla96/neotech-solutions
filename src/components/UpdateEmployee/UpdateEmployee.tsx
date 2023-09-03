import { Button, Modal, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ModalBox,
  Form,
  Row,
  UpdateEmployeeButton,
} from './UpdateEmployee.styled';

import { initialValues } from 'components/AddEmployee/constants';
import { getValidationSchema } from 'components/AddEmployee/schema';
import { useEmployee, useUpdateEmployee } from 'services/api';

interface UpdateEmployeeProps {
  id: string;
}

const UpdateEmployee = ({ id }: UpdateEmployeeProps) => {
  const { t } = useTranslation();

  const [isAddEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);

  const { data } = useEmployee(id, {
    enabled: isAddEmployeeModalOpen,
  });

  const { mutate: updateEmployee } = useUpdateEmployee();

  const {
    touched,
    errors,
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: getValidationSchema(),
    onSubmit: formValues => {
      updateEmployee(
        {
          id,
          payload: {
            ...formValues,
            dateOfEmployment: dayjs(formValues.dateOfEmployment).format(
              'YYYY-MM-DD',
            ),
            dateOfBirth: dayjs(formValues.dateOfBirth).format('YYYY-MM-DD'),
            homeAddress: {
              ZIPCode: formValues.zipCode,
              city: formValues.city,
              addressLine1: formValues.address1,
              addressLine2: formValues.address2,
            },
          },
        },
        {
          onSuccess: () => {
            setAddEmployeeModalOpen(false);
          },
        },
      );
    },
  });

  useEffect(() => {
    setFieldValue('email', data?.email);
    setFieldValue('name', data?.name);
    setFieldValue('phoneNumber', data?.phoneNumber);
    setFieldValue('city', data?.homeAddress.city);
    setFieldValue('address1', data?.homeAddress.addressLine1);
    setFieldValue('address2', data?.homeAddress.addressLine2);
    setFieldValue('zipCode', data?.homeAddress.ZIPCode);

    setFieldValue('dateOfEmployment', data?.dateOfEmployment);
    setFieldValue('dateOfBirth', data?.dateOfBirth);
  }, [data, setFieldValue]);

  return (
    <>
      <UpdateEmployeeButton
        variant="outlined"
        onClick={() => setAddEmployeeModalOpen(prev => !prev)}>
        {t('general.update')}
      </UpdateEmployeeButton>

      <Modal
        open={isAddEmployeeModalOpen}
        onClose={() => setAddEmployeeModalOpen(false)}>
        <ModalBox>
          <Typography component="h2" id="modal-modal-title" variant="h6">
            {t('general.enterEmployeeInfo')}
          </Typography>

          <Form onSubmit={handleSubmit}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Row>
                <TextField
                  fullWidth
                  hiddenLabel
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  id="name"
                  name="name"
                  placeholder={t('general.name')}
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  id="email"
                  name="email"
                  placeholder={t('general.email')}
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Row>

              <Row>
                <TextField
                  fullWidth
                  error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder={t('general.phoneNumber')}
                  value={values.phoneNumber}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  error={touched.city && Boolean(errors.city)}
                  helperText={touched.city && errors.city}
                  id="city"
                  name="city"
                  placeholder={t('general.city')}
                  value={values.city}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Row>

              <Row>
                <DatePicker
                  label={t('general.dateOfEmployment')}
                  value={dayjs(values.dateOfEmployment)}
                  onChange={value =>
                    setFieldValue('dateOfEmployment', value?.format())
                  }
                />

                <DatePicker
                  label={t('general.dateOfBirth')}
                  value={dayjs(values.dateOfBirth)}
                  onChange={value =>
                    setFieldValue('dateOfBirth', value?.format())
                  }
                />
              </Row>

              <Row>
                <TextField
                  fullWidth
                  error={touched.address1 && Boolean(errors.address1)}
                  helperText={touched.address1 && errors.address1}
                  id="address1"
                  name="address1"
                  placeholder={t('general.address1')}
                  value={values.address1}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  error={touched.address2 && Boolean(errors.address2)}
                  helperText={touched.address2 && errors.address2}
                  id="address2"
                  name="address2"
                  placeholder={t('general.address2')}
                  value={values.address2}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Row>

              <TextField
                fullWidth
                error={touched.zipCode && Boolean(errors.zipCode)}
                helperText={touched.zipCode && errors.zipCode}
                id="zipCode"
                name="zipCode"
                placeholder={t('general.zipCode')}
                value={values.zipCode}
                onBlur={handleBlur}
                onChange={handleChange}
              />

              <Button
                fullWidth
                color="primary"
                type="submit"
                variant="contained">
                {t('general.updateEmployee')}
              </Button>
            </LocalizationProvider>
          </Form>
        </ModalBox>
      </Modal>
    </>
  );
};

export default UpdateEmployee;
