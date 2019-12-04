const initialState = {
    expenses:[],
    error:false
}

export default function(state = initialState,action){
    switch(action.type){
        case "FETCH_EXPENSES":
            return{
                expenses:action.payload,
                error:false
            };
        case "NEW_EXPENSE":
            return{
                expenses: [...state.expenses, ...action.payload],
                error:false
            }
        case "EXPENSE_UPDATE":
            return{
                expenses:state.expenses.forEach(element =>{
                    if(element.id == action.payload.id){
                        element = action.payload
                    }}),
                error:false
            }
        case "DELETE_EXPENSE":
            return{
                expenses:state.expenses.filter(expense => expense.id !== action.payload),
                error:false
            }
        case "EXPENSE_ERROR":
            return{
                error:true
            }
        default:
            return state
    }
}