import uuid from 'uuid';
import database from '../firebase/firebase';

// components calls action generator
// action generator returns object
// components dispatches object
// redux store changes

// components calls action generator
// action generator returns function
// components dispatches function
// function runs ( has the ability to dispatch other actions and do whatever it wants) 
/*
export const addExpense = (
  {
     description = '',
     note = '',
     amount = 0,
     createdAt = 0  
  } = {} 
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt  
  }  
});
*/

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = ( expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id  
}); 
  
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates  
});

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        }); 
      });

      dispatch(setExpenses(expenses));
    });
  };
};    
  