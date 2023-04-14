import { ADD_FROM_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../action'

const initialState = {
    content: []
}

const favouritesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FROM_FAVOURITES:
            return {
                ...state,
                content: [...state, action.payload]
            }
        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                content: state.content.filter((track) => track !== action.payload)
            }
        default:
            return state
    }
}

export default favouritesReducer