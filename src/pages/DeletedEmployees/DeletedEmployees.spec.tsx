import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DeletedEmployees from './DeletedEmployees';

import { getDeletedEmployees } from 'testing/mockRequests';
import { employees } from 'testing/mocks';
import renderComponent from 'testing/renderComponent';

const columnLabels = [
  'general.name',
  'general.email',
  'general.phoneNumber',
  'general.dateOfBirth',
  'general.dateOfEmployment',
  'general.address',
];

describe('<DeletedEmployees />', () => {
  it('should display table data', async () => {
    renderComponent(<DeletedEmployees />);

    await waitFor(() => {
      expect(getDeletedEmployees).lastCalledWith({
        page: 1,
        limit: 5,
      });
    });

    columnLabels.forEach(col => {
      expect(screen.getByRole('columnheader', { name: col }));
    });

    await waitFor(() => {
      employees.forEach(row => {
        expect(
          screen.getByRole('cell', {
            name: row.name,
          }),
        );

        expect(screen.getByRole('cell', { name: row.email }));
        expect(screen.getByRole('cell', { name: row.phoneNumber }));
        expect(screen.getByRole('cell', { name: row.dateOfBirth }));
        expect(screen.getByRole('cell', { name: row.dateOfEmployment }));
        expect(
          screen.getByRole('cell', {
            name: `${row.homeAddress.city} ${row.homeAddress.addressLine1} ${row.homeAddress.ZIPCode}`,
          }),
        );
      });
    });
  });

  it('should be able to change page and rows per page', async () => {
    renderComponent(<DeletedEmployees />);

    await waitFor(() => {
      expect(getDeletedEmployees).lastCalledWith({
        page: 1,
        limit: 5,
      });
    });

    userEvent.click(screen.getByRole('button', { name: 'Go to next page' }));

    await waitFor(() => {
      expect(getDeletedEmployees).lastCalledWith({
        page: 2,
        limit: 5,
      });
    });

    await waitFor(() => {
      userEvent.click(
        screen.getByRole('button', { name: 'Go to previous page' }),
      );
    });

    await waitFor(() => {
      expect(getDeletedEmployees).lastCalledWith({
        page: 1,
        limit: 5,
      });
    });

    userEvent.click(screen.getByRole('button', { name: /rows per page: 5/i }));
    userEvent.click(screen.getByRole('option', { name: '10' }));

    await waitFor(() => {
      expect(getDeletedEmployees).lastCalledWith({
        page: 1,
        limit: 10,
      });
    });
  });

  it('should not be able to change the page if it does not exist', async () => {
    renderComponent(<DeletedEmployees />);

    await waitFor(() => {
      expect(getDeletedEmployees).lastCalledWith({
        page: 1,
        limit: 5,
      });
    });

    expect(
      screen.getByRole('button', { name: 'Go to previous page' }),
    ).toBeDisabled();

    userEvent.click(screen.getByRole('button', { name: 'Go to next page' }));

    expect(
      screen.getByRole('button', { name: 'Go to next page' }),
    ).toBeDisabled();
  });
});
