import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

function TransactionHistory() {
    const transactions = [
        { id: 1, date: '2024-04-10', type: 'Deposit', amount: '500 USD', status: 'Completed' },
        { id: 2, date: '2024-04-07', type: 'Withdrawal', amount: '200 USD', status: 'Completed' },
        { id: 3, date: '2024-04-05', type: 'Loan Payment', amount: '150 USD', status: 'Pending' },
        { id: 4, date: '2024-03-29', type: 'Loan Issued', amount: '1000 USD', status: 'Completed' },
    ];

    return (
        <TableContainer component={Paper}>
            <Typography variant="h6" sx={{ margin: 2 }}>
                Transaction History
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell>{transaction.type}</TableCell>
                            <TableCell>{transaction.amount}</TableCell>
                            <TableCell>{transaction.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TransactionHistory;
