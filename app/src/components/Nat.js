import { Component } from 'react'

const Info = require('./Info.jsx')

class Nat extends Component {

  constructor (props) {
    super(props)
    console.log('nat = ', props)
    this.state = {greetings: ['Jim', 'Sally']}
  }

  componentDidMount () {
    console.log('did mount')

    setInterval(() => {
      console.log('hello')
      const data = {greetings: [new Date().toString()]}
      this.setState(data)
    }, 500)
  }

  render () {
    return (
      <div className='HelloWorldList'>
        Hello {this.state.greetings}
        <Info nat={this.state}/>
      </div>
    )
  }
}

export default Nat
