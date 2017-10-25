import React from 'react'

class Child extends React.Component {

  render()  {

    return <li>{this.props.name}</li>

  }

}

module.exports = Child
