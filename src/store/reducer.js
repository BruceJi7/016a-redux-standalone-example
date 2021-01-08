const initialState = {
    counter : 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "INCREMENT" :
            return {
                ...state,
                counter:state.counter+1
            }
    
        case "DECREMENT" :
            return {
                ...state,
                counter:state.counter-1
            }
        
        case "ADD" :
            return {
                ...state,
                counter:state.counter+action.value
            }
        
        case "SUBTRACT": 
            return {
                ...state,
                counter:state.counter-action.value
            }
        
        case "STORE":
 
            return {
                ...state,
                counter:0 ,
                results : state.results.concat({id: new Date(), value: state.counter})
            }
        
        case "DELETE":
 
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