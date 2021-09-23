import React from 'react';
import { data } from '../fakeApi/applicationsList';
import Flag from 'react-world-flags';
// import { IData } from '../models/IData';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Box,
} from '@mui/material/';
import SettingsIcon from '@mui/icons-material/Settings';
import { useHistory } from 'react-router-dom';

export default function ApplicationsList() {
  const history = useHistory();

  const tableFields = [
    'Country',
    'Main applicant name',
    '# of applicants',
    'Visa type',
    'Action required',
    'Payment status',
    'Application status',
    'Created on',
  ];
  const rows = data();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Typography variant="h4">Applications</Typography>
        <Button
          onClick={() => history.push('/newApplication')}
          variant="contained"
          color="primary">
          Create new application
        </Button>
      </Box>

      <Table
        sx={{
          marginTop: 5,
          border: '1px solid #f4f4f4',
        }}
        aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableFields.map((field) => {
              return (
                <TableCell key={field} align="right">
                  {field}
                </TableCell>
              );
            })}

            <TableCell align="right">
              <SettingsIcon />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              sx={{
                '&:hover': {
                  background: '#f4f4f4',
                },
              }}
              key={row.applicationId}>
              <TableCell component="th" scope="row">
                <Flag code={row.country} height="24" width="35" />
              </TableCell>
              <TableCell align="right">{row.mainApplicant}</TableCell>
              <TableCell align="right">{row.numberOfApplicants}</TableCell>
              <TableCell align="right">{row.visaType}</TableCell>
              <TableCell align="right">
                {row.actionRequired ? 'yes' : 'no'}
              </TableCell>
              <TableCell align="right">{row.paymentStatus}</TableCell>
              <TableCell align="right">{row.applicationStatus}</TableCell>
              <TableCell align="right">{row.createdOn.getFullYear()}</TableCell>
              <TableCell align="right">...</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
