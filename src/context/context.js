import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [[{"amount":340,"category":"House","type":"Expense","date":"2021-03-06","id":"26bc9840-1751-4166-a6ee-f2a704dd980c"},{"amount":1000,"category":"Salary","type":"Income","date":"2021-03-29","id":"6cf47fa0-4578-42cb-bec9-0582e6e9104c"},{"amount":890,"category":"Car","type":"Expense","date":"2021-03-06","id":"81a2b43e-f592-489a-9125-56bfc851cdf3"},{"amount":150,"category":"Extra income","type":"Income","date":"2021-03-06","id":"5ee7be71-1a6b-48f9-b380-42b06e198984"}] ];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)
    
    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

    const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0);

    
    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction, 
            addTransaction,
            transactions,
            balance
         }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
