const initialState = {
    expenses:[],
    error:''
}

export default function(state = initialState,action){
    switch(action.type){
        case "FETCH_EXPENSES":
            return{
                expenses:action.payload,
                error:''
            };
        case "NEW_EXPENSE":
            return{
                expenses: [...state.expenses, ...action.payload],
                error:''
            }
        case "EXPENSE_UPDATE":
            return{
                expenses: state.expenses.forEach(expense => {
                    if(expense.id == action.payload.id){
                        expense = action.payload
                    }
                })
            }
        case "DELETE_EXPENSE":
            let newExpenses = state.expenses.filter(expense => expense.id !== action.payload)
            return{
                expenses:newExpenses,
                error:''
            }
        case "EXPENSE_ERROR":
            return{
                error:action.payload
            }
        default:
            return state
    }
} 