import React from 'react'

class Info extends React.Component {

  render () {
    return (

      <div className='col-5'>

        <div className='card'>

          <div className="card-header">
            <b>MQTT React Template</b>
          </div>

          <div className="card-body">
          <p>appName: appname</p>
          <p>mqttHostName: beta.cmmc.io</p>
          <p>mqttPort: 59001</p>
          <p>mqttClientId: cmmc-ws-2947.9026</p>
          <p>mqttPrefix: MARU/</p>
          <p>mqttPubTopic: MARU/YOUR-NAME-001/$/command</p>
          <p>mqttSubTopic: MARU/YOUR-NAME-001/status</p>
          </div>
        </div>

      </div>

    )

  }

}

module.exports = Info
