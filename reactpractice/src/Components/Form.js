import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : ''
        }
    }
   changehandler =   (event) => {
        this.setState({
                username : event.target.value
        })
    }
    
    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type='text' value= {this.state.username} onChange={this.changehandler}/>
                </div>
            </form>
        )
    }
}
