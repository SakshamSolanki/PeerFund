import {firebase} from '../firebase.js';
import { LoanRequests } from '../Models/LoanRequests.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const db = getFirestore(firebase);

export const createLoanRequest = async (req, res, next) => {
    try {
        const data = req.body;
        await addDoc(collection(db, 'LoanRequests'), data);
        res.status(200).send('Loan Request created succesfully!');
    }catch (error) {
        res.status(400).send(error.message);
    }
}

export const getLoanRequests = async (req , res , next) => {
    try {
        const loanRequests = await getDocs(collection(db, 'LoanRequests'));
        const loanRequestsArray = []

        if(loanRequests.empty) {
            res.send(400).send('No Loan Requests Foound');
        }else {
            loanRequests.forEach((doc) => {
                const loanRequest = new LoanRequests(
                    doc.id,
                    doc.userId,
                    doc.amount,
                    doc.interestRate,
                    doc.duration,
                    doc.currency,
                    doc.status
                );
                loanRequestsArray.push(loanRequest)
            });

            res.status(200).send(loanRequestsArray)
        }
    } catch (error) {
         res.status(400).send(error.message);
    }
}

export const getLoanRequest = async (req, res, next) => {
    try {
        const id = req.param.id;
        const loanRequest = doc(db, 'LoanRequests', id);
        const data = await getDoc(loanRequest);
        if(loanRequest.exists()){
            res.status(200).send(data.data())
        } else {
            res.status(404).send('Loan Request not found');
        }
    }catch (error) {
        res.status(400).send(error.message)
    }
}

export const updateLoanRequest = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const loanRequest = doc(db, 'LoanRequests', id);
      await updateDoc(loanRequest, data);
      res.status(200).send('Loan Request updated successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

export const deleteLoanRequest = async (req, res, next) => {
    try {
        const id = req.params.id;
        await deleteDoc(doc(db, 'LoanRequests', id));
        res.status(200).send('Loan Request deleted successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};