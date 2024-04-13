// // // import React, { useState } from 'react';

// // // function BorrowerRequests() {
// // //   // Static dummy data for borrower requests
// // //   const dummyRequests = [
// // //     { id: 'req1', amount: '1.5 BTC', interestRate: '4%', duration: '6 months', borrowerId: 'user123' },
// // //     { id: 'req2', amount: '3.0 ETH', interestRate: '3.5%', duration: '12 months', borrowerId: 'user456' },
// // //     { id: 'req3', amount: '0.75 BTC', interestRate: '5%', duration: '9 months', borrowerId: 'user789' },
// // //   ];

// // //   const [requests, setRequests] = useState(dummyRequests);

// // //   function handleAccept(requestId) {
// // //     console.log('Accepted request:', requestId);
// // //     // Implement functionality to accept a request here
// // //   }

// // //   return (
// // //     <div className="max-w-2xl mx-auto p-4">
// // //       <h2 className="text-xl font-bold mb-4">Borrower Requests</h2>
// // //       <ul>
// // //         {requests.map(request => (
// // //           <li key={request.id} className="bg-white shadow overflow-hidden rounded-md px-6 py-4 mb-4 flex justify-between items-center">
// // //             <div>
// // //               <p className="text-sm font-medium text-gray-900">Request {request.id}</p>
// // //               <p className="text-sm text-gray-600">{request.amount} at {request.interestRate} interest for {request.duration}</p>
// // //             </div>
// // //             <button 
// // //               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// // //               onClick={() => handleAccept(request.id)}>
// // //               Accept
// // //             </button>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // }

// // // export default BorrowerRequests;
// // import React, { useState } from 'react';
// // import List from '@mui/material/List';
// // import ListItem from '@mui/material/ListItem';
// // import ListItemText from '@mui/material/ListItemText';
// // import Button from '@mui/material/Button';
// // import Paper from '@mui/material/Paper';
// // import Typography from '@mui/material/Typography';

// // function BorrowerRequests() {
// //   // Static dummy data for borrower requests
// //   const dummyRequests = [
// //     { id: 'req1', amount: '1.5 BTC', interestRate: '4%', duration: '6 months', borrowerId: 'user123' },
// //     { id: 'req2', amount: '3.0 ETH', interestRate: '3.5%', duration: '12 months', borrowerId: 'user456' },
// //     { id: 'req3', amount: '0.75 BTC', interestRate: '5%', duration: '9 months', borrowerId: 'user789' },
// //   ];

// //   const [requests, setRequests] = useState(dummyRequests);

// //   // Function to handle accepting a loan request
// //   function handleAccept(requestId) {
// //     console.log('Accepted request:', requestId);
// //     // Normally you would handle the POST request here
// //   }

// //   return (
// //     <Paper style={{ padding: 16, margin: '16px 0' }}>
// //       <Typography variant="h5" component="h2" style={{ marginBottom: 16 }}>
// //         Borrower Requests
// //       </Typography>
// //       <List>
// //         {requests.map(request => (
// //           <ListItem key={request.id} divider>
// //             <ListItemText
// //               primary={`Request ${request.id}: ${request.amount} at ${request.interestRate} interest for ${request.duration}`}
// //             />
// //             <Button variant="contained" color="primary" onClick={() => handleAccept(request.id)}>
// //               Accept
// //             </Button>
// //           </ListItem>
// //         ))}
// //       </List>
// //     </Paper>
// //   );
// // }

// // export default BorrowerRequests;
// import React from 'react';
// import { List, ListItem, ListItemText, Button, Paper, Typography } from '@mui/material';

// function BorrowerRequests() {
//   // Static dummy data for loan requests
//   const loanRequests = [
//     { id: 1, borrowerInfo: 'User123', amount: '1.0 BTC', interestRate: '4.5%', duration: '12 months' },
//     { id: 2, borrowerInfo: 'User456', amount: '1.5 BTC', interestRate: '3.8%', duration: '9 months' },
//     { id: 3, borrowerInfo: 'User789', amount: '0.5 BTC', interestRate: '5%', duration: '6 months' },
//   ];

//   // Function to handle accepting a loan request
//   const handleAccept = (id) => {
//     console.log('Accepted request:', id);
//     // Normally you would handle the POST request here
//   };

//   return (
//     <Paper elevation={3} sx={{ margin: '16px', padding: '16px' }}>
//       <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
//         Loan Requests
//       </Typography>
//       <List>
//         {loanRequests.map((request, index) => (
//           <ListItem key={request.id} divider secondaryAction={
//             <Button variant="contained" color="primary" onClick={() => handleAccept(request.id)}>
//               Accept
//             </Button>
//           }>
//             <ListItemText
//               primary={`Request #${index + 1}`}
//               secondary={`Borrower: ${request.borrowerInfo} - Amount: ${request.amount} - Interest Rate: ${request.interestRate} - Duration: ${request.duration}`}
//             />
//           </ListItem>
//         ))}
//       </List>
//     </Paper>
//   );
// }

// export default BorrowerRequests;
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  Button,
  Link,
  Typography
} from '@mui/material';

function BorrowerRequests() {
  // Static dummy data for loan requests
  const loanRequests = [
    { id: 1, borrowerInfo: 'User123', profileUrl: '/profile/user123', amount: '1.0 BTC', interestRate: '4.5%', duration: '12 months' },
    { id: 2, borrowerInfo: 'User456', profileUrl: '/profile/user456', amount: '1.5 BTC', interestRate: '3.8%', duration: '9 months' },
    { id: 3, borrowerInfo: 'User789', profileUrl: '/profile/user789', amount: '0.5 BTC', interestRate: '5%', duration: '6 months' },
  ];

  // Function to handle accepting a loan request
  const handleAccept = (id) => {
    console.log('Accepted request:', id);
    // Normally you would handle the POST request here
  };

  return (
    <Paper sx={{ margin: '16px', overflow: 'hidden' }}>
      <Typography variant="h6" sx={{ padding: '16px' }}>
        Loan Requests
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="loan requests table">
          <TableHead>
            <TableRow>
              <TableCell>Serial No.</TableCell>
              <TableCell>Borrower</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Interest Rate</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Accept</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loanRequests.map((request, index) => (
              <TableRow key={request.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Link href={request.profileUrl} underline="hover">
                    {request.borrowerInfo}
                  </Link>
                </TableCell>
                <TableCell>{request.amount}</TableCell>
                <TableCell>{request.interestRate}</TableCell>
                <TableCell>{request.duration}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleAccept(request.id)}>
                    Accept
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default BorrowerRequests;
