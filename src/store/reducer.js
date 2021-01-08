import * as actionTypes from "./actions"

const initialState = {
    counter : 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT :
            return {
                ...state,
                counter:state.counter+1
            }
    
        case actionTypes.DECREMENT :
            return {
                ...state,
                counter:state.counter-1
            }
        
        case actionTypes.ADD :
            return {
                ...state,
                counter:state.counter+action.value
            }
        
        case actionTypes.SUBTRACT: 
            return {
                ...state,
                counter:state.counter-action.value
            }
        
        case actionTypes.STORE:
 
            return {
                ...state,
                counter:0 ,
                results : state.results.concat({id: new Date(), value: state.counter})
            }
        
        case actionTypes.DELETE:
 
            const arr  = state.results.filter((result)=> result.id !== action.delId)

            return {
                ...state,
                results : arr
                
            }
        
        default:
            return {
                ...state
            }
        }
}

export default reducer