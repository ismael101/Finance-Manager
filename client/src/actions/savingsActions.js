import {FETCH_SAVINGS,NEW_SAVING,DELETE_SAVING,SAVINGS_ERROR,UPDATE_SAVING} from './types'
import axios from 'axios'

export const fetchSavings = () => {
    return async dispatch => {
        try{
            const res = await axios.get('/savings')
            dispatch({
                type:FETCH_SAVINGS,
                payload:res.data
            })
        }catch(error){
            dispatch({
                type:SAVINGS_ERROR
            })
        }
    }
}

export const createSavings = (savings) => {
    return async dispatch => {
        try{
            const res = await axios.post('/savings',savings)
            dispatch({
                type:NEW_SAVING,
                payload:res.data
            })
        }catch(error){
            dispatch({
                type:SAVINGS_ERROR
            })
        }

    }
}

export const updateSaving = (saving) => {
    return async dispatch => {
        try{
            const res = await axios.put(`/savings/${saving.id}`,saving)
            dispatch({
                type:UPDATE_SAVING,
                payload:res.data
            })
        }catch(error){
            dispatch({
                type:SAVINGS_ERROR
            })
        }
    }
}

export const deleteSaving = (saving) => {
    return async dispatch => {
        try{
            const res = await axios.delete(`/savings/${saving.id}`)
            dispatch({
                type:DELETE_SAVING,
                payload:saving.id
            })
        }catch(error){
            dispatch({
                type:SAVINGS_ERROR
            })
        }
    }
}