import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    


  render() {
    
    //approach 4 - if we want one thing or nothing then we use this approach
    return this.state.isLoggedIn && <div>Welcome sarfraz</div>


    //approach 3

    // return (
    //     this.state.isLoggedIn ? 
    //     <div>Welcome Sarfraz</div> : 
    //     <div>Welcome Guest</div>
    // )


    //  approach 2
    // let message
    // if(this.state.isLoggedIn){
    //     message =  <div>Welcome Sarfraz</div>
    //   } else{
    //     message =  <div>Welcome Guest</div>
    //   }
    // return message


    //   approach 1 
    //   if(this.state.isLoggedIn){
    //       return <div>Welcome Sarfraz</div>
    //     } else{
    //         return <div>Welcome Guest</div>
    //     }
        
    // return (
    //    <div>
    //      <div>Hello Sarfraz</div>
    //     <div>Hello Guest</div>
    //    </div>
    // )
  }
}

export default UserGreeting
