import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    counterAdd() {
        // this.setState({
        //     count: this.state.count +1
        // },
        // () => {
        //     console.log('Callback Value', this.state.count)
        // })

        this.setState(prevState => ({
            count: prevState.count +1
        }))

        console.log("count")
    }

    incrementFive() {
        this.counterAdd()
        this.counterAdd()
        this.counterAdd()
        this.counterAdd()
        this.counterAdd()
    }

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Click to increase count</button>
      </div>
    )
  }
}

export default Counter
