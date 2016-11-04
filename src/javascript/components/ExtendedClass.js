
import React from 'react'
import BaseClass from './BaseClass'

class ExtendedClass extends BaseClass{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		alert(this.state.messages)
	}
}

export default ExtendedClass