import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
import axios from 'axios'
import './home.scss'

export default function Home() {

    const [data, setData] = useState();
    const [index, setIndex] = useState(0);

    const columns = [
        {
            title: "地区",
            dataIndex: "area"
        }, {
            title: "Java",
            dataIndex: "java"
        }, {
            title: "PHP",
            dataIndex: "php"
        }, {
            title: "Node",
            dataIndex: "node"
        }, {
            title: "JS",
            dataIndex: "js"
        }, {
            title: "Python",
            dataIndex: "python"
        }
    ];

    useEffect(() => {
        axios.get('/data.json').then((response) => {
            const res = response.data
            console.log(res);
            if (res.code === 0) {
                setData(res.data);
                
            }
        })
    }, [])

    return <div className="home">
        <h1>语言大数据报告</h1>
        <div className="wrap">
            <div className="nav">
                <a className={index == 0 ? "checked" : ""} onClick={() => setIndex(0)}>语言动态</a>
                <a className={index == 1 ? "checked" : ""} onClick={() => setIndex(1)}>语言地图</a>
                <a className={index == 2 ? "checked" : ""} onClick={() => setIndex(2)}>语言热搜</a>
                <a className={index == 3 ? "checked" : ""} onClick={() => setIndex(3)}>语言播报</a>
            </div>
            <p>数据纯属虚构</p>
            <Table
                bordered
                pagination={false}
                columns={columns}
                dataSource={data}
            />
            <Link to="/" className="nav-link">回首页</Link>

        </div>
    </div>
}