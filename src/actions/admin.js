import {APIUrls} from '../helper/url';
import {getFormBody} from '../helper/utils';
import{REQUEST_START,REQUEST_FAILED,REQUEST_SUCESS,CLEAR_AUTH_STATE} from './actionTypes';
export function startRequesting(){
    return {
        type:REQUEST_START
    }
}
export function faildRequesting(errorMessage){
    return {
        type:REQUEST_FAILED,
        error:errorMessage
    }
}
export function Requestingdone(user){
    return {
        type:REQUEST_SUCESS,
        user,
    }
}

export function sendRequest(email,name){
    return (dispatch)=>{
        dispatch(startRequesting());
        const url=APIUrls.sendRequest();
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',

            },
            body:getFormBody({email,name}),
        })
        .then((response) => response.json())
        .then((data)=>{
            console.log('data',data);
            if(data.success){
                dispatch(Requestingdone(data.data.user));
                return;
            }
            dispatch(faildRequesting(data.message));

        })
    }
}
export function clearAuthState(){
    return{
      type:CLEAR_AUTH_STATE,
    }
  }
