import React from 'react'
import ReactDOM from 'react-dom'

import Info from './components/Info.jsx'
import Title from './components/Title.jsx'
import List from './components/List.jsx'

const nodesId = {}
const edgesId = {}

class Container extends React.Component {

  constructor (props) {
    super(props)
    this.state = {objLists: []}
  }

  componentDidMount () {
    // create an array with nodes
    window.nodes = new vis.DataSet([])
    // create an array with edges
    window.edges = new vis.DataSet([])

    window.fn = () => {
      let nodes_array = []
      let edges_array = []
      Object.keys(objMaster).forEach((key, idx) => {
        console.log(`${key}`)
        console.log(`debug : ${this.state.objLists}`)
        if (nodesId[key] === undefined) {
          nodes.add({
            id: key, label: key
          })
          nodesId[key] = 1
        }
        objMaster[key].children_array.forEach((v, idx) => {
            if (nodesId[v.info.from] === undefined) {
              nodes.add({
                id: v.info.from, label: `--${v.info.from}`
              })
              nodesId[v.info.from] = 1
            }
            if (!edgesId[`${v.info.from}-${v.info.to}`]) {
              edges.add({
                from: v.info.from, to: v.info.to, arrows: 'to', dashes: false
              })
              edgesId[`${v.info.from}-${v.info.to}`] = 1
            }
          }
        )
        // window.network.stabilize()
      })

    }

    // create a network
    let container = document.getElementById('mynetwork')
    let data = {
      nodes: nodes,
      edges: edges
    }
    let options = {}
    window.network = new vis.Network(container, data, options)

    // setTimeout(fn, 5000)
    setInterval(() => {
      fn()
      // network.stabilize()
    }, 1000)

  }

  render () {
    return (
      <div className='container'>

        <Info/>

        <section className='section'>
          <div className="container">

            <article className="message">
              <div className="message-header">
                <Title title={'This is title'}/>
              </div>
              <div className="message-body">
                {}
              </div>
            </article>

          </div>
        </section>

      </div>
    )
  }
}

ReactDOM.render(<Container/>, document.getElementById('app'))
