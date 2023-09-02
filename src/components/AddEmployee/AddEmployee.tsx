import { Button, Modal, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ModalBox, Form, Row, AddEmployeeButton } from './AddEmployee.styled';
import { initialValues } from './constants';

import { getValidationSchema } from 'components/AddEmployee/schema';
import { useCreateEmployee } from 'services/api';

const AddEmployee = () => {
  const { t } = useTranslation();

  const { mutate: createEmployee } = useCreateEmployee();

  const [isAddEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);

  const {
    touched,
    errors,
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: getValidationSchema(),
    onSubmit: formValues => {
      createEmployee(
        {
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
        {
          onSuccess: () => {
            setAddEmployeeModalOpen(false);
            resetForm();
          },
        },
      );
    },
  });

  return (
    <>
      <AddEmployeeButton
        variant="outlined"
        onClick={() => setAddEmployeeModalOpen(prev => !prev)}>
        {t('general.addEmployee')}
      </AddEmployeeButton>

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
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  id="name"
                  label={t('general.name')}
                  name="name"
                  placeholder=""
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  id="email"
                  label={t('general.email')}
                  name="email"
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
                  label={t('general.phoneNumber')}
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  error={touched.city && Boolean(errors.city)}
                  helperText={touched.city && errors.city}
                  id="city"
                  label={t('general.city')}
                  name="city"
                  value={values.city}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Row>

              <Row>
                <DatePicker
                  label={t('general.dateOfEmployment')}
                  value={dayjs(values.dateOfEmployment)}
                  onChange={value => handleChange(value?.format())}
                />

                <DatePicker
                  label={t('general.dateOfBirth')}
                  value={dayjs(values.dateOfBirth)}
                  onChange={value => handleChange(value?.format())}
                />
              </Row>

              <Row>
                <TextField
                  fullWidth
                  error={touched.address1 && Boolean(errors.address1)}
                  helperText={touched.address1 && errors.address1}
                  id="address1"
                  label={t('general.address1')}
                  name="address1"
                  value={values.address1}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  error={touched.address2 && Boolean(errors.address2)}
                  helperText={touched.address2 && errors.address2}
                  id="address2"
                  label={t('general.address2')}
                  name="address2"
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
                label={t('general.zipCode')}
                name="zipCode"
                value={values.zipCode}
                onBlur={handleBlur}
                onChange={handleChange}
              />

              <Button
                fullWidth
                color="primary"
                type="submit"
                variant="contained">
                {t('general.addEmployee')}
              </Button>
            </LocalizationProvider>
          </Form>
        </ModalBox>
      </Modal>
    </>
  );
};

export default AddEmployee;
