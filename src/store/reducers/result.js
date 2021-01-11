import * as actionTypes from "../actions"

const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case actionTypes.STORE:
 
            return {
                ...state,
                counter:0 ,
                results : state.results.concat({id: new Date(), value: action.result})
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

export default resultReducer