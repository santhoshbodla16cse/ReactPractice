import React, { Component } from 'react'

export default class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name : 'santhosh'
        }
        console.log('lifecycle A Construcotor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycle A getderivedstatefromprops')
        return null
    }
    componentDidMount(){
        console.log('lifecycle A componentdidmount')
    }
    
    render() {
        console.log('lifecycle A rendermethod')
        return (
            
            <div>
            LifeCycle A
            </div>
        )
    }
}
