import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isgay : false
        }
    }
    
    render() {
        if(this.state.isgay)
        {
            return <h1>hi baaya</h1>
        }
        else
        {
            return <h1>no im not a gay</h1>
        }
        // return (
        //     <div>
                
        //     </div>
        // )
    }
}
export default ConditionalRendering