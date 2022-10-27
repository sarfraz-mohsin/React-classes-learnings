import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'sarfraz'
      }
      console.log("LifecycleB")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifecycleB gtderivedstatefromprops")
        return null 
    }
    
    componentDidMount (){
        console.log("LifecycleB component did mount")
    }

    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null
    }

    compnentDidUpdate(){
        console.log("LifecycleB componentDidUpdate")
    }


  render() {
    console.log("LifecycleB render")
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecycleB