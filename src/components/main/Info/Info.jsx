import React,{Fragment,Component} from "react";
import {connect} from "react-redux"
import {loadListDataAsyanc,ListDataAsyanc} from "./actionCreator"

 class Info extends Component{
    render(){
        return (
            <Fragment>
                <h1>我是信息页</h1>
                {/* <p>{this.props.num}</p> */}
                {/* <button onClick={this.props.HandleTest.bind(this)}>点击</button> */}
                <ul>
                   {
                       this.props.list.map((item,index)=>{
                           return (
                               <li key={index}>
                                   {item.get('show_name')}
                               </li>
                           )
                       })
                   }
                </ul>
                <ul>
                {
                       this.props.tolist.map((item,index)=>{
                           return (
                               <li key={index}>
                                   {item.get('show_name')}
                               </li>
                           )
                       })
                   }
                </ul>
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.handleAdd();
        this.props.HandleTest()
    }
}
const mapStateToProps=(store)=>{
    
    return {
        list:store.getIn(['infoReducer','list']),
        tolist:store.getIn(['infoReducer','tolist']),
}
    // num:store.infoReducer.count
}
//里面必需返回一个对象
const mapDispathToProps=(dispatch)=>({
    handleAdd(){
        
        dispatch(loadListDataAsyanc(dispatch))
    },
    HandleTest(){
        dispatch(ListDataAsyanc(dispatch))
    }
})
export default connect(mapStateToProps,mapDispathToProps)(Info);