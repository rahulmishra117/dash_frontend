import { combineReducers } from 'redux';
import
    {
    
        SET_SHOW_FAVOURITES,
        
    } from '../actions/actionTypes';

const intialdata={
    list:[],
    showdata:false,
}
export function data(state = intialdata ,action)
{
    switch(action.type){
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showdata:action.val
            }
        default:
            return state;    
    }
}