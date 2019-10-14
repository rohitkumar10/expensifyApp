import uuid from 'uuid'
import database from '../firebase/firebase'

/*export const addExpense = (
    {
        description =  '',
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
})*/

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description =  '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData
        const expense = {description, note, amount, createdAt }

        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense 
            }))
        })
    }
}

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id 
})

export const startRemoveExpense = ({ id }) => {
    return (dispatch) => {
        database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }))
        })
    }
}

export const editExpense = ({ id } = {}) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const setExpense = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses 
})

export const startSetExpense = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = []

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpense(expenses))
        })
    }
}
