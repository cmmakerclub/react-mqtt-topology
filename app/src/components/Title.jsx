import React from 'react'

class Title extends React.Component {

  render () {

    return <p className="message-header-text">{this.props.title}</p>

  }

}

module.exports = Title
