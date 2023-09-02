import { TablePagination } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledCardContainer } from './DeletedEmployees.styled';

import { Table } from 'components';
import { useDeletedEmployees } from 'services/api';

const initialPage = 0;
const initialRowsPerPage = 5;

const DeletedEmployees = () => {
  const { t } = useTranslation();

  const [page, setPage] = useState(initialPage);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

  const { data, isFetched } = useDeletedEmployees({
    page: page + 1,
    limit: rowsPerPage,
  });

  const tableColumns: TableColumn<keyof Employee>[] = [
    { key: 'name', label: t('general.name') },
    { key: 'email', label: t('general.email') },
    { key: 'phoneNumber', label: t('general.phoneNumber') },
    { key: 'dateOfBirth', label: t('general.dateOfBirth') },
    { key: 'dateOfEmployment', label: t('general.dateOfEmployment') },
    { key: 'homeAddress', label: t('general.address') },
    { key: 'deletedAt', label: t('general.deletedAt') },
  ];

  const tableData = data?.employees.map(item => ({
    id: item.email,
    name: item.name,
    email: item.email,
    phoneNumber: item.phoneNumber,
    dateOfBirth: item.dateOfBirth,
    dateOfEmployment: item.dateOfEmployment,
    homeAddress: `${item.homeAddress.city} ${item.homeAddress.addressLine1} ${item.homeAddress.ZIPCode}`,
    deletedAt: dayjs(item.deletedAt).format('YYYY-MM-DD	'),
  }));

  return (
    <StyledCardContainer>
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

export default DeletedEmployees;
