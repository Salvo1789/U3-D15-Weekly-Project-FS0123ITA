const SEARCH_URL = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=';

export const IS_PLAYING = 'IS_PLAYING'
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const ADD_MAIN_SEARCH = 'ADD_MAIN_SEARCH'
export const ADD_USER_SEARCH = 'ADD_USER_SEARCH'

export const isPlayingAction = (track) => ({type: IS_PLAYING, payload:  track})
export const addToFavouritesAction = (track) => ({type: ADD_TO_FAVOURITES, payload: track})
export const removeFromFavouritesAction = (track) => ({type: REMOVE_FROM_FAVOURITES, payload: track})

export const addUserSearchAction = (query) => {
    return async (dispatch) => {
        try{
            let resp = await fetch(`${SEARCH_URL}${query}`)
            if (resp.ok){
                let { data } = await resp.json()
                dispatch({type: ADD_USER_SEARCH, payload: data})
            }else{
                console.log('Something gone wrong')
            }
        } catch (error){
            console.log(error)
        }
    }
}

export const addMainSearchAction = (query) => {
    return async (dispatch) => {
        try{
            let resp = await fetch(`${SEARCH_URL}${query}`)
            if (resp.ok){
                let { data } = await resp.json()
                dispatch({type: ADD_MAIN_SEARCH, id: query, payload: data})
            }else{
                console.log('Something gone wrong')
            }
        } catch (error){
            console.log(error)
        }
    }
}