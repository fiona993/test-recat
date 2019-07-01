import {GET_LIST_DATA,LIST_DATA} from "./actionCreator"
import {fromJS,Map} from 'immutable'
const defaultStore=fromJS({
    list:[],
    tolist:[]
})
export default (state=defaultStore,action)=>{
    switch (action.type){
        case GET_LIST_DATA:
             return state.update('list',(x)=>x.concat(fromJS(action.res)))  ;
        case  LIST_DATA:
            return state.update('tolist',(x)=>x.concat(fromJS(action.res)))  ;
             
    }
    return state;
}