import React from 'react'

class Info extends React.Component {

  render () {
    return (

      <div>
        <section className='section'>
          <div className='container'>
            <h1 className="title">MQTT</h1>
            <h2 className="subtitle">
              React Template
            </h2>
            {/*<div className="notification">*/}
              {/*<p>appName: appname</p>*/}
              {/*<p>mqttHostName: beta.cmmc.io</p>*/}
              {/*<p>mqttPort: 59001</p>*/}
              {/*<p>mqttClientId: cmmc-ws-2947.9026</p>*/}
              {/*<p>mqttPrefix: MARU/</p>*/}
              {/*<p>mqttPubTopic: MARU/YOUR-NAME-001/$/command</p>*/}
              {/*<p>mqttSubTopic: MARU/YOUR-NAME-001/status</p>*/}
            {/*</div>*/}
          </div>
        </section>
      </div>

    )

  }

}

module.exports = Info
