import {firebase} from '../firebase.js';
import {Product} from '../Models/productModel.js';
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

export const createUser = async (req, res, next) => {
    try {
        const data = req.body;
        await addDoc(collection(db, 'Users'), data);
        res.status(200).send('User created succesfully!');
    }catch (error) {
        res.status(400).send(error.message);
    }
}

export const getUsers = async (req , res , next) => {
    try {
        const users = await getDocs(collection(db, 'Users'));
        const usersArray = []

        if(users.empty) {
            res.send(400).send('No Users Foound');
        }else {
            users.forEach((doc) => {
                const user = new User(
                    doc.id,
                    doc.name,
                    doc.phoneNumber,
                    doc.loanRequestsId,
                    doc.loanAgrementsId,
                    doc.transactions
                );
                usersArray.push(user)
            });

            res.status(200).send(usersArray)
        }
    } catch (error) {
         res.status(400).send(error.message);
    }
}

export const getUser = async (req, res, next) => {
    try {
        const id = req.param.id;
        const user = doc(db, 'Users', id);
        const data = await getDoc(user);
        if(user.exists()){
            res.status(200).send(data.data())
        } else {
            res.status(404).send('User not found');
        }
    }catch (error) {
        res.status(400).send(error.message)
    }
}

export const updateUser = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const product = doc(db, 'Users', id);
      await updateDoc(product, data);
      res.status(200).send('user updated successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  export const deleteProduct = async (req, res, next) => {
    try {
      const id = req.params.id;
      await deleteDoc(doc(db, 'Users', id));
      res.status(200).send('user deleted successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };