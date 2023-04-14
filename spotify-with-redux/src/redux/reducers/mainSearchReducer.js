import { ADD_MAIN_SEARCH } from '../action'

const mainSearchReducer = (state = null, action) => {
    switch(action.type){
        case ADD_MAIN_SEARCH:
            return{
                ...state,
                [action.id]: action.payload
            }
        default:
            return state
    }
}

export default mainSearchReducer