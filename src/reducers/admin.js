import {
    REQUEST_START,
    REQUEST_SUCESS,
    REQUEST_FAILED

} from '../actions/actionTypes';

const intialAdminState={
    user:{},
    error:null,
    isSent:false,
    isProgress:false,
};

export default function admin(state = intialAdminState,action){
    switch(action.type){
        case  REQUEST_START:
            return{
                ...state,
                isProgress:true
             }
         case REQUEST_SUCESS:
             return{
                 ...state,
                 user:action.user,
                 isSent:true,
                 isProgress:false,
                 error:null
             }

         case REQUEST_FAILED:
             return{
                 ...state,
                 isProgress:false,
                 error:action.error
             };
           default:
               return state;  
            
    }
}
