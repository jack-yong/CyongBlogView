import {
    GET_CATEGORY_LIST
} from "../constant";

export const getCategoryList = (data) => {
    return {
        type: GET_CATEGORY_LIST,
        value: data,
    };
}
