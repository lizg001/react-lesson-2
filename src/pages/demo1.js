import React from 'react';
// import logo from './logo.svg';
import { Input, Button, Select } from 'antd'
import 'antd/dist/antd.css'
import './demo1.scss';

const Search = Input.Search;
const Option = Select.Option;

class App extends React.Component {

	state = {
		val: '',
		list: []
	}

	handleChange = (e) => {
		let val = e.target.value;
		this.setState({
			val
		})
	}

	handleAdd = () => {
		let { val, list } = this.state;
		list.push(val)
		this.setState({
			list
		})
	}

	handleSearch = (value) => {
		let { list } = this.state;
		list.push(value)
		this.setState({
			list
		})
	}

	render() {
		const { val, list } = this.state;
		const options = [];
		const LiItem = list.map((item, index) => {
			options.push(<Option key={index}>{item}</Option>)
			return <li key={index}>{item}</li>
		})
		return <div>
			<p>欢迎来到腾讯课堂！</p>
			<h1> Hello,World </h1>

			<Input type="text" value={val} onChange={this.handleChange} style={{ width: 300 }}></Input>
			<Button type="Primary" onClick={this.handleAdd}>添加</Button>

			<ul>
				{
					LiItem
				}
			</ul>
			<div>
				<Search
					style={{ width: 350 }}
					onSearch={this.handleSearch}
					enterButton="添加">

				</Search><br/>

				<Select style = {{width:150}}>
					{options}
				</Select>
			</div>
		</div>
	}
}

export default App;
