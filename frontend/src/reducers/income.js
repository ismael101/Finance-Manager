const initialState = {
    income:[],
    error:''
}

export default function(state = initialState,action){
    switch(action.type){
        case "FETCH_INCOME":
            return{
                income:action.payload,
                error:''
            };
        case "NEW_INCOME":
            return{
                income: [...state.income, ...action.payload],
                error:''
            }
        case "DELETE_INCOME":
            let newIncome = state.income.filter(income => income.id !== action.payload)
            return{
                income:newIncome,
                error:''
            }
        case "INCOME_ERROR":
            return{
                error:action.payload
            }
        default:
            return state
    }
}