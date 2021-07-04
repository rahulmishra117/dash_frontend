export const REQUEST_START='REQUEST_START';

export const REQUEST_SUCESS='REQUEST_SUCESS';
export const REQUEST_FAILED='REQUEST_FAILED';
export const CLEAR_AUTH_STATE='CLEAR_AUTH_STATE';
export const LIST_AD ='LIST_AD';

export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';

export function setShowFavourites(val)
{
    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}