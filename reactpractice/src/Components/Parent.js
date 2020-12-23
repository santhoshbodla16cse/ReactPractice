import React, { Component } from 'react'
import Child from './child'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'hi mother and father'
        }
        this.greet = this.greetparent.bind(this);
    }
    greetparent(){
        alert(this.state.message)
    }
    
    render() {
        return (
            <div>
                <Child greethandler = {this.greet}/>
            </div>
        )
    }
}

export default Parent
