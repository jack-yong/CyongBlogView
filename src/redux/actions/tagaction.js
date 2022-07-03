import {
    GET_TAG_LIST
} from "../constant";


export const getTagList = (data) => {
    return {
        type: GET_TAG_LIST,
        value: data,
    };
}

