import {combineReducers} from 'redux'
import expenses from './expenses'
import income from './income'
import savings from './savings'

export default combineReducers({
    expenses:expenses,
    income:income,
    savings:savings
})