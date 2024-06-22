import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const data = [
    { id: 1, name: 'Ujjwal Kumar', age: 22, occupation: 'Front Developer' },
    { id: 2, name: 'Mayank Chauhan', age: 21, occupation: 'Data mining' },
    { id: 3, name: 'Mohit Sackhla', age: 21, occupation: 'Senior Developer' },
    { id: 4, name: 'Mohit Lahoti', age: 21, occupation: 'Back-End Developer' },
];

const Tables = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Occupation</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.age}</TableCell>
                            <TableCell>{row.occupation}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Tables;