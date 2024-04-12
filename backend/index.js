import express from 'express';
import cors from 'cors';

import config from './config.js';
import { userRouter } from './Routes/UserRoute.js';
import { loanAgreementRouter } from './Routes/LoanAgreementsRoute.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/loanAgreements' , loanAgreementRouter);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);