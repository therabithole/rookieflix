import React, { Component } from 'react';
class Icon extends Component {
    state = {  }
    render() { 
        return ( <i> {this.props.children} </i> );
    }
}
 
export default Icon;