import React from 'react'

class Topology extends React.Component {

  render () {

    return (

      <div className="col">

        <div className="card">

          <div className="card-header">

            <b>Topology</b>

          </div>

          <div className="card-block">

            <div id="mynetwork" style={{ height: this.props.height }}/>

          </div>

        </div>

      </div>

    )

  }

}

module.exports = Topology

