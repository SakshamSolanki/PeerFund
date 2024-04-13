import express from 'express';

import { 
    createLoanRequest,
    getLoanRequest,
    getLoanRequests,
    updateLoanRequest,
    deleteLoanRequest
} from "../Controllers/LoanRequestsController.js"

const loanRequestsRouter = express.Router();

loanRequestsRouter.get('/', getLoanRequests);
loanRequestsRouter.post('/new', createLoanRequest);
loanRequestsRouter.get('/:id', getLoanRequest);
loanRequestsRouter.put('/update/:id', updateLoanRequest);
loanRequestsRouter.delete('/delete/:id', deleteLoanRequest);

export { loanRequestsRouter };