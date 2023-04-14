import { IS_PLAYING } from '../action'

const isPlayingReducer = (state = null, action) => {
    switch(action.type){
        case IS_PLAYING:
            return action.payload
        default:
            return state
    }
}

export default isPlayingReducer