import {
    GET_CATEGORY_LIST
} from "../constant";

/*
    state
*/
const defaultState = []



/*
    category Reducer
*/
const categoryReducer = (state = defaultState, action) => {
    const { type, value } = action;
    switch (type) {
        case GET_CATEGORY_LIST:
            return value;
        default:
            return state;
    }

}

export default categoryReducer