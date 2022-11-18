import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 200 },
  { field: 'lastName', headerName: 'Last name', width: 200 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 120,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 400,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Preveen', firstName: 'Shruthi', age: 28 },
  { id: 2, lastName: 'Stark', firstName: 'Tony', age: 30 },
  { id: 3, lastName: 'Mohan', firstName: 'Priya', age: 26 },
  { id: 4, lastName: 'Kurmar', firstName: 'Allwin', age: 28 },
  { id: 5, lastName: 'Haren', firstName: 'Hari', age: 25 },
];

export default function DataTable() {
  return (
    <div style={{ height: 500, width: '200%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}