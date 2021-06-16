import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
	handleCheckAll = (event) => {
		this.props.checkAllTodo(event.target.checked)
	}

	handClearAllDone = () =>{
		this.props.clearAllDone()
	}

	render() {
		const {todos} = this.props
		//已完成的个数
		const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
		//总数
		const total = todos.length
		return (
			<div className="todo-footer">
				<label>
					<input onChange={this.handleCheckAll} checked={doneCount===total&& total !== 0?true:false} type="checkbox"/>
				</label>
				<span>
					<span>已完成{doneCount}</span>  /  全部{total}
				</span>
				<button onClick={this.handClearAllDone} className="btn btn-danger">清除已完成任务</button>
			</div>
		)
	}
}
