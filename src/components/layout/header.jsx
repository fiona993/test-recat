import React from 'react'
import { NavLink } from 'react-router-dom'
function App(){
    let list=[
        {name:'信息页面',path:'/info'},
        {name:'测试页面',path:'/test'},
        {name:'新闻页面',path:'/news'},

    ]
    return (
        <div>
            <p>
                {list.map((item,index)=>(
                    <NavLink key={index} to={item.path}>{item.name}</NavLink>
                ))}
            </p>
        </div>
    )
}
export default App;