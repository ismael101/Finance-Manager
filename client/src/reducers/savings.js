const initialState = {
    savings:[],
    error:false
}

export default function(state = initialState,action){
    switch(action.type){
        case "FETCH_SAVINGS":
            return{
                savings:action.payload,
                error:false
            };
        case "NEW_SAVING":
            return{
                savings:[...state.savings, ...action.payload],
                error:false
            }
        case "SAVINGS_UPDATE":
            return{
                savings:state.savings.forEach(element => {
                    if(element.id == action.payload.id){
                        element = action.payload
                    }
                }),
                error:false
            }
        case "DELETE_SAVING":
            return{
                savings:state.savings.filter(saving => saving.id !== action.payload),
                error:false
            }
        case "SAVINGS_ERROR":
            return{
                error:true
            }
        default:
            return state
    }
}