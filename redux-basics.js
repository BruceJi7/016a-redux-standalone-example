const redux = require('redux') //node.js syntax for imports
const createStore = redux.createStore //Initialise store

const initialState = { // Doesn't have to be an object
    counter: 0
}

// Reducer

const rootReducer = (state = initialState, action) => { // state here is previous state. The = sets state to initial state if nothing else is passed.
    
    // Use ifs or switch
    if (action.type === 'INC_COUNTER') {

        //Never ever forever never ever mutate state. Always overwrite like so:
        return {
            ...state,
            counter : state.counter+1
        }
        
    }

    if (action.type === 'ADD_COUNTER') {

        return {
            ...state,
            counter : state.counter+action.value
        }
        
    }

    return state

}

// Store

const store = createStore(rootReducer) // When initialising a store, pass in the root reducer
console.log(store.getState())


// Subscription - You don't need to manually call getState. Apply these before actions.

store.subscribe(()=> { // function performed whenever state is updated. No args to this func.
    
    // Perform any action you like when the state is updated. 
    console.log('[Subscription]', store.getState())
    
}) 

// Dispatching Action

store.dispatch({type:"INC_COUNTER"}) //The arg is an object. It is the action. It MUST have a type property. Make it short, descriptive, UPPER CASE.

store.dispatch({type:"ADD_COUNTER", value:5}) //The other properties are optional. They can be accessed. Consider a payload object {x:_, y:_}

console.log(store.getState())

// ### Notes:

/*
store.getState() - a function that returns what state looks like in the store.


*/
