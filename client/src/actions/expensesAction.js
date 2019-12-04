import {FETCH_EXPENSES,NEW_EXPENSE,DELETE_EXPENSE,EXPENSES_ERROR,UPDATE_EXPENSE} from './types'
import axios from 'axios'

export const fetchExpenses = () => {
    return async dispatch => {
        try{
            const res = await axios.get('/expenses')
            dispatch({
                type:FETCH_EXPENSES,
                payload:res.data
            })
        }catch(error){
            dispatch({
                type:EXPENSES_ERROR
            })
        }
    }
}

export const createExpenses = (expense) => {
    return async dispatch => {
        try{
            const res = await axios.post('/expenses',expense)
            dispatch({
                type:NEW_EXPENSE,
                payload:res.data
            })
        }catch(error){
            dispatch({
                type:EXPENSES_ERROR
            })
        }

    }
}

export const updateExpense = (expense) => {
    return async dispatch => {
        try{
            const res = await axios.put(`/expenses/${expense.id}`)
            dispatch({
                type:UPDATE_EXPENSE,
                payload:res.data
            })
        }catch(error){
            dispatch({
                type:EXPENSES_ERROR
            })
        }
    }
}

export const deleteExpense = (expense) => {
    return async dispatch => {
        try{
            const res = await axios.delete(`/expenses/${expense.id}`)
            dispatch({
                type:DELETE_EXPENSE,
                payload:expense.id
            })
        }catch(error){
            dispatch({
                type:EXPENSES_ERROR
            })
        }
    }
}