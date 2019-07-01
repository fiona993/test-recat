// import {combineReducers} from "redux"
import {combineReducers} from 'redux-immutable'
import infoReducer from "@/components/main/Info/reducer"
import testReducer from "@/components/main/Test/reducer"
//多模块
export default combineReducers({
    infoReducer,
    testReducer
})
