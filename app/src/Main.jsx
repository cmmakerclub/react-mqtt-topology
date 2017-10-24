import React from 'react'
import ReactDOM from 'react-dom'

import Info from './components/Info.jsx'
import Master from './components/Master.jsx'
import Title from './components/Title.jsx'

class Container extends React.Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    setInterval(() => {
      Object.keys(objMaster).forEach((key, idx) => {
        console.log(`${key}`)
        objMaster[key].children_array.forEach((v, idx) => {
          console.log(`--- ${v.info.from}`)
        })
      })
    }, 500)

  }

  render () {
    return (
      <div className='container'>

        <Info/>

        {/*<Title/>*/}

      </div>
    )
  }
}

ReactDOM.render(<Container/>, document.getElementById('app'))
