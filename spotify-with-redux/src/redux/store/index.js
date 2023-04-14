import { combineReducers, configureStore } from '@reduxjs/toolkit'

import isPlayingReducer from '../reducers/isPlayingReducer'
import favouritesReducer from '../reducers/favouritesReducer'
import userSearchReducer from '../reducers/userSearchReducer'
import mainSearchReducer from '../reducers/mainSearchReducer'

const comboReducer = combineReducers({
    isPlaying: isPlayingReducer,
    favourites: favouritesReducer,
    userSearchResults: userSearchReducer,
    mainSearchResultss: mainSearchReducer
})

const store = configureStore({
    reducer: comboReducer
})

export default store