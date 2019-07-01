import React,{Fragment,Component} from "react";
import { Route ,Redirect,Switch} from "react-router-dom";
import Info from '@/components/main/Info/Info'
import News from '@/components/main/News/News'
import Test from '@/components/main/Test/Test'
export default class extends Component{
    render(){
        return (
            <Fragment>
                <Switch>
                    <Route path='/info' component={Info}></Route>
                    <Route path='/news' component={News}></Route>
                    <Route path='/test' component={Test}></Route>
                    <Redirect path="/" to="/info"/>
                </Switch>
            </Fragment>
        )
    }
}