import React,{Fragment,Component} from "react";
import {connect} from "react-redux"
 class Test extends Component{
    render(){
        return (
            <Fragment>
                <h1>我是测试页</h1>
                {/* <h3>{this.props.num}</h3> */}
            </Fragment>
        )
    }
}
const mapStateToProps=(store)=>({
    name:"MSea",
    // num:store.testReducer.num
})
//里面必需返回一个对象
const mapDispathToProps=(dispatch)=>({
    handleAdd(){
        
    }
})
export default connect(mapStateToProps,mapDispathToProps)(Test);