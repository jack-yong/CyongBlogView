import {
    GET_TAG_LIST
} from "../constant";


/*
    state
*/
const defaultState = []



/*
    tag Reducer
*/

const tagReducer = (state = defaultState, action) => {
    const { type, value } = action;
    switch (type) {
        case GET_TAG_LIST:
            return value;
        default:
            return state;
    }
}

export default tagReducer