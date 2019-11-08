import {combineReducers} from 'redux'
import income from './income'
import expenses from './expenses'
import savings from './savings'

export default combineReducers({
    income:income,
    expenses:expenses,
    savings:savings
})