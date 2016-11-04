
import React from 'react'

class BaseClass extends React.Component{
	constructor(props){
		super(props)
		this.state = {}
		this.state.messages = props.messages
	}
	render(){
		return (
			<div>
				{
					this.state.messages.map( (msg, index) => {
						return (
							<span key={index}>{msg} </span>
						)
					})
				}
			</div>
		)
	}
}

export default BaseClass