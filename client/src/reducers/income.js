const initialState = {
    income:[],
    error:false
}

export default function(state = initialState,action){
    switch(action.type){
        case "FETCH_INCOME":
            return{
                income:action.payload,
                error:false
            };
        case "NEW_INCOME":
            return{
                income:[...state.income, ...action.payload],
                error:false
            }
        case "INCOME_UPDATE":
            return{
                incomes: state.income.forEach(element => {
                    if(element.id == action.payload.id){
                        element = action.payload
                    }
                }),
                error:false
            }
        case "DELETE_INCOME":
            return{
                income:state.income.filter(income => income.id !== action.payload),
                error:false
            }
        case "INCOME_ERROR":
            return{
                error:true
            }
        default:
            return state
    }
}