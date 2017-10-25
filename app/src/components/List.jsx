import React from 'react'

class List extends React.Component {

  render () {

    return (

      <div className='col-12' style={{ marginTop: '20px' }}>

        <div className="card">

          <div className="card-header">

            <b>Master Address : {this.props.header}</b>

          </div>

          <div className="card-body">

            <p>Child Address</p>

            <ul id='list-child'>

              {this.props.child}

            </ul>

          </div>

        </div>

      </div>

    )

  }

}

module.exports = List
