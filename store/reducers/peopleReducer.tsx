const initialState = {
    people: [] = []
}

export const peopleReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case "ADDPERSON":
            return {...state, people: payload}
        default: 
            return state;
    }
}