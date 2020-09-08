import React from 'react'
import { Link } from 'react-router-dom'
import './app.scss'
// import { Button } from 'antd'
import 'antd/dist/antd.css'

export default function App() {
    return <div className="container">
        <h1>欢迎来到腾讯课堂</h1>
        <Link to="/login">去登陆</Link>
        <br />
        <Link to="/home">去首页</Link>
    </div>
}
