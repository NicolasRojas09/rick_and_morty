import { ADD_FAV, REMOVE_FAV } from "./actions-types";

export const addfav = (character) => {
    return {type: ADD_FAV, payload: character}
}

export const removefav = (id) => {
    return {type: REMOVE_FAV, payload: id}
}