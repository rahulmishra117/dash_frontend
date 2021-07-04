import { APIUrls } from "../helper/url";
import {LIST_AD} from './actionTypes';

export function featchlist(){
    return (dispatch)=>{
        const url=APIUrls.featchlist();
        console.log(url);
        fetch(url)
        .then((response)=>{
            console.log('response',response);
            return response.json();
        })
        .then((data)=>{
            console.log(admindata);
            dispatch(finddata(data.data.admindata));
        })
    }
}

export function finddata(admindata){
    return{
        type:LIST_AD,
        admindata
    }
}