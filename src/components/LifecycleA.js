import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'sarfraz'
      }
      console.log("Lifecycle A")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifecycleA gtderivedstatefromprops")
        return null 
    }
    
    componentDidMount (){
        console.log("LifecycleA component did mount")
    }

    shouldComponentUpdate(){
        console.log("Lifecycle A shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("lifecycleA getSnapshotBeforeUpdate")
        return null
    }

    compnentDidUpdate(){
        console.log("lifecycleA componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: 'Mohsin'
        })
    }

  render() {
    console.log("LifecycleA render")
    return (
      <div>
        LifecycleA
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA
