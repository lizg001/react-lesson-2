import React from 'react'
import { link, useParams,useHistory } from 'react-router-dom'
import './app.scss'
import { Button } from 'antd'
import 'antd/dist/antd.css'

export default function Detail () {
    const params = useParams();
    const history = useHistory();

    return <div className = "container">
        <p>This is Detail</p>
        <p>当前参数为：{params.id} </p>
        <Button onClick = {()=>{
            history.push('/')
        }}>跳转首页</Button>
        
    </div>
}


// export default class App extends React.Component{

//     handleJump = () => {
//         this.props.history.push('./login')
//     }

//     render() {
//         return <div className = "container">
//         <h1>欢迎来到腾讯课堂</h1>
//         <p>当前的参数ID值为:{this.props.match.params.id} </p>
//         </div>
//     }
// }