export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const DELETE = "DELETE";
export const STORE = "STORE";

export const increment = () => {
  return { type: INCREMENT };
};
export const decrement = () => {
  return { type: DECREMENT };
};
export const add = (value) => {
  return { type: ADD, value: value };
};
export const subtract = (value) => {
  return { type: SUBTRACT, value: value };
};
export const delete_result = (id) => {
  return { type: DELETE, delId: id };
};

export const saveResult = (result) => {
    return { type: STORE, result: result };
}

export const storeResult = (result) => {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(saveResult(result))      
        }, 2000);

    }
  
};
