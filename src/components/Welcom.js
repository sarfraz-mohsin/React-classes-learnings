import React, { Component } from "react";

class Welcome extends Component {
    render (){
        return <h1>You are {this.props.name} a.k.a {this.props.hero}</h1>
    }
}

export default Welcome;