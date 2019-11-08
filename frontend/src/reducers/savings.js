const initialState = {
    savings:[],
    error:''
}

export default function(state = initialState,action){
    switch(action.type){
        case "FETCH_SAVINGS":
            return{
                savings:action.payload,
                error:''
            };
        case "NEW_SAVING":
            return{
                savings: [...state.savings, ...action.payload],
                error:''
            }
        case "DELETE_SAVING":
            let newSavings = state.savings.filter(saving => saving.id !== action.payload)
            return{
                savings:newSavings,
                error:''
            }
        case "SAVINGS_ERROR":
            return{
                error:action.payload
            }
        default:
            return state
    }
}