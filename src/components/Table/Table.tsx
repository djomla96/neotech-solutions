import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';

interface TableProps<Data> {
  rows?: Data[];
  columns: TableColumn[];
}

const Table = <Data extends TableData>({
  rows = [],
  columns = [],
}: TableProps<Data>) => (
  <TableContainer component={Paper}>
    <MuiTable size="small" sx={{ minWidth: 650 }}>
      <TableHead>
        <TableRow>
          {columns.map(({ key, label }) => (
            <TableCell align="right" key={key}>
              <span>{label}</span>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            {columns.map(({ key }) => (
              <TableCell align="right" key={key}>
                {row[key] || '-'}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  </TableContainer>
);

export default Table;
