import { ADD_FAV, REMOVE_FAV } from "./actions-types"

const initialStore = {
    myFavorites: []
}

const reducer = (state = initialStore, action) => {
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter (fav => fav.id !== action.payload)
            }

        default:
            return {...state}
    }
}

export default reducer