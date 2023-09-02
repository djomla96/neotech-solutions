import { render, screen } from '@testing-library/react';

import Table from './Table';

const rows = [
  {
    id: '1',
    name: 'name1',
  },
  {
    id: '2',
    name: 'name2',
  },
  {
    id: '3',
    name: 'name3',
  },
];

const columns = [{ key: 'name', label: 'Name' }];

describe('<Table />', () => {
  it('should display columns', () => {
    render(<Table columns={columns} rows={rows} />);

    columns.forEach(col => {
      expect(screen.getByRole('columnheader', { name: col.label }));
    });
  });

  it('should display rows', () => {
    render(<Table columns={columns} rows={rows} />);

    rows.forEach(row => {
      expect(screen.getByRole('cell', { name: row.name }));
    });
  });
});
