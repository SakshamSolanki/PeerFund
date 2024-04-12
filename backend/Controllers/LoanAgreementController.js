import {firebase} from '../firebase.js';
import { LoanAgreements } from '../Models/LoanAgreements.js';
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

export const createLoanAgreement = async (req, res, next) => {
    try {
        const data = req.body;
        await addDoc(collection(db, 'LoanAgreements'), data);
        res.status(200).send('Loan Agreements created succesfully!');
    }catch (error) {
        res.status(400).send(error.message);
    }
}

export const createLoanRequest = async (req, res, next) => {
    try {
        const data = req.body;
        await addDoc(collection(db, 'LoanRequests'), data);
        res.status(200).send('Loan Request created succesfully!');
    }catch (error) {
        res.status(400).send(error.message);
    }
}

export const getLoanAgreements = async (req , res , next) => {
    try {
        const loanAgrements = await getDocs(collection(db, 'LoanAgreements'));
        const loanAgrementsArray = []

        if(loanAgrements.empty) {
            res.send(400).send('No Loan Agreements Foound');
        }else {
            loanAgrements.forEach((doc) => {
                const loanAgreement = new LoanRequests(
                    doc.id,
                    doc.lenderId,
                    doc.borrowerId,
                    doc.loanRequestsId,
                    doc.amount,
                    doc.interestRate,
                    doc.duration,
                    doc.status
                );
                loanAgrementsArray.push(loanAgreement)
            });

            res.status(200).send(loanAgrementsArray)
        }
    } catch (error) {
         res.status(400).send(error.message);
    }
}

export const getLoanAgreement = async (req, res, next) => {
    try {
        const id = req.param.id;
        const loanAgreement = doc(db, 'LoanAgreements', id);
        const data = await getDoc(loanAgreement);
        if(loanAgreement.exists()){
            res.status(200).send(data.data())
        } else {
            res.status(404).send('Loan Agreement not found');
        }
    }catch (error) {
        res.status(400).send(error.message)
    }
}

export const updateLoanAgreement = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const loanAgreement = doc(db, 'LoanAgreements', id);
      await updateDoc(loanAgreement, data);
      res.status(200).send('Loan Agreement updated successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

export const deleteLoanAgreement = async (req, res, next) => {
    try {
        const id = req.params.id;
        await deleteDoc(doc(db, 'LoanAgreements', id));
        res.status(200).send('Loan Agreement deleted successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};