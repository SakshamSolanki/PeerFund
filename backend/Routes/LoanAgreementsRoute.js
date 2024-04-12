import express from 'express';

import { 
    createLoanAgreement,
    getLoanAgreement,
    getLoanAgreements,
    updateLoanAgreement,
    deleteLoanAgreement
} from "../Controllers/LoanAgreementController.js"

const loanAgreementRouter = express.Router();

loanAgreementRouter.get('/', getLoanAgreements);
loanAgreementRouter.post('/new', createLoanAgreement);
loanAgreementRouter.get('/:id', getLoanAgreement);
loanAgreementRouter.put('/update/:id', updateLoanAgreement);
loanAgreementRouter.delete('/delete/:id', deleteLoanAgreement);

export { loanAgreementRouter };