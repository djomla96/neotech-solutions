import { Button, TablePagination } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledCardContainer } from './Employees.styled';

import { AddEmployee, Table } from 'components';
import { useEmployees } from 'services/api';
import useDeleteEmployee from 'services/api/hooks/useDeleteEmployee';

const initialPage = 0;
const initialRowsPerPage = 5;

type Columns = 'softDelete' | keyof Employee;

const Employees = () => {
  const { t } = useTranslation();

  const [page, setPage] = useState(initialPage);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

  const { data, isFetched } = useEmployees({
    page: page + 1,
    limit: rowsPerPage,
  });

  const { mutate: deleteEmployee } = useDeleteEmployee();

  const tableColumns: TableColumn<Columns>[] = [
    { key: 'name', label: t('general.name') },
    { key: 'email', label: t('general.email') },
    { key: 'phoneNumber', label: t('general.phoneNumber') },
    { key: 'dateOfBirth', label: t('general.dateOfBirth') },
    { key: 'dateOfEmployment', label: t('general.dateOfEmployment') },
    { key: 'homeAddress', label: t('general.address') },
    { key: 'softDelete', label: '' },
  ];

  const tableData = data?.employees.map(item => ({
    id: item._id,
    name: item.name,
    email: item.email,
    phoneNumber: item.phoneNumber,
    dateOfBirth: item.dateOfBirth,
    dateOfEmployment: item.dateOfEmployment,
    homeAddress: `${item.homeAddress.city} ${item.homeAddress.addressLine1} ${item.homeAddress.ZIPCode}`,
    softDelete: (
      <Button
        color="error"
        variant="contained"
        onClick={() => deleteEmployee(item._id)}>
        {t('general.delete')}
      </Button>
    ),
  }));

  return (
    <StyledCardContainer>
      <AddEmployee />

      <Table columns={tableColumns} rows={tableData} />
      <TablePagination
        component="div"
        count={data?.count || 0}
        page={isFetched ? page : 0}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
        onPageChange={(_, newPage) => setPage(newPage)}
        onRowsPerPageChange={event => {
          setRowsPerPage(+event?.target.value);
          setPage(initialPage);
        }}
      />
    </StyledCardContainer>
  );
};

export default Employees;
