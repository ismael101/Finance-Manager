import {FETCH_INCOME,NEW_INCOME,DELETE_INCOME,INCOME_ERROR,UPDATE_INCOME} from './types'
import axios from 'axios'

export const fetchIncome = () => {
    return async dispatch => {
        try{
            const res = await axios.get('/income')
            dispatch({
                type:FETCH_INCOME,
                payload:res.data
            })
        }catch(error){
            dispatch({
                type:INCOME_ERROR
            })
        }
    }
}

export const createIncome = (income) => {
    return async dispatch => {
        try{
            const res = await axios.post('/income',income)
            dispatch({
                type:NEW_INCOME,
                payload:res.data
            })
        }catch(error){
            dispatch({
                type:INCOME_ERROR
            })
        }

    }
}

export const updateIncome = (income) => {
    return async dispatch => {
        try{
            const res = await axios.put(`/income/${income.id}`)
            dispatch({
                type:UPDATE_INCOME,
                payload:res.data
            })
        }catch(error){
            dispatch({
                type:INCOME_ERROR
            })
        }
    }
}

export const deleteIncome = (income) => {
    return async dispatch => {
        try{
            const res = await axios.delete(`/income/${income.id}`)
            dispatch({
                type:DELETE_INCOME,
                payload:income.id
            })
        }catch(error){
            dispatch({
                type:INCOME_ERROR
            })
        }
    }
}