// import React from 'react';

// function PendingLoans() {
//   // Dummy data for the loan requests
//   const loans = [
//     { id: 1, amount: '2 BTC', leftToRepay: '0.5 BTC', duration: '12 months', interestRate: '5%', installments: 6 },
//     { id: 2, amount: '1.5 BTC', leftToRepay: '0.75 BTC', duration: '6 months', interestRate: '4%', installments: 3 },
//     { id: 3, amount: '3 BTC', leftToRepay: '1 BTC', duration: '18 months', interestRate: '6%', installments: 9 },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-5">Pending Loans</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Serial No.</th>
//               <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Loan Amount</th>
//               <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Left to Repay</th>
//               <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Duration</th>
//               <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Interest Rate</th>
//               <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Installments</th>
//               <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700">
//             {loans.map((loan, index) => (
//               <tr key={loan.id}>
//                 <td className="text-left py-3 px-4">{index + 1}</td>
//                 <td className="text-left py-3 px-4">{loan.amount}</td>
//                 <td className="text-left py-3 px-4">{loan.leftToRepay}</td>
//                 <td className="text-left py-3 px-4">{loan.duration}</td>
//                 <td className="text-left py-3 px-4">{loan.interestRate}</td>
//                 <td className="text-left py-3 px-4">{loan.installments}</td>
//                 <td className="text-left py-3 px-4">
//                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     Repay
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default PendingLoans;
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function PendingLoans() {
    // Dummy data for the loan requests
    const loans = [
        { id: 1, amount: '2 BTC', leftToRepay: '0.5 BTC', duration: '12 months', interestRate: '5%', installments: 6 },
        { id: 2, amount: '1.5 BTC', leftToRepay: '0.75 BTC', duration: '6 months', interestRate: '4%', installments: 3 },
        { id: 3, amount: '3 BTC', leftToRepay: '1 BTC', duration: '18 months', interestRate: '6%', installments: 9 },
    ];

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Serial No.</TableCell>
                        <TableCell>Loan Amount</TableCell>
                        <TableCell>Left to Repay</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell>Interest Rate</TableCell>
                        <TableCell>Installments</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loans.map((loan, index) => (
                        <TableRow key={loan.id}>
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell>{loan.amount}</TableCell>
                            <TableCell>{loan.leftToRepay}</TableCell>
                            <TableCell>{loan.duration}</TableCell>
                            <TableCell>{loan.interestRate}</TableCell>
                            <TableCell>{loan.installments}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary">
                                    Repay
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PendingLoans;
