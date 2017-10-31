import React from 'react';
import ReactDOM from 'react-dom';

import Info from './components/Info.jsx';
import List from './components/List.jsx';
import Child from './components/Child.jsx';
import Topology from './components/Topology.jsx';

const nodesId = {};
const edgesId = {};
const multipleMaster = {};

class Container extends React.Component {

  constructor (props) {
    super(props);
    this.state = {objLists: []};
  }

  componentDidMount () {
    window.nodes = new vis.DataSet([]);
    window.edges = new vis.DataSet([]);

    window.fn = () => {
      Object.keys(objMaster).forEach((key, idx) => {
        // console.log(`${key}`)
        // console.log(`debug : ${this.state.objLists}`)

        if (nodesId[key] === undefined) {
          nodes.add({
            id: key, label: key
          });
          multipleMaster[key] = (<List header={key}/>); // create master
          nodesId[key] = 1;
        }
        objMaster[key].children_array.forEach((v, idx) => {
            if (nodesId[v.info.from] === undefined) {
              nodes.add({
                id: v.info.from, label: `--${v.info.from}`
              });

              //multipleMaster[key].child[key] = (<Child name={`${v.info.from}`}/>) // create child

              nodesId[v.info.from] = 1;
            }
            if (!edgesId[`${v.info.from}-${v.info.to}`]) {
              edges.add({
                from: v.info.from, to: v.info.to, arrows: 'to', dashes: false
              });
              edgesId[`${v.info.from}-${v.info.to}`] = 1;
            }
          }
        );
        // window.network.stabilize()

        _.forOwn(multipleMaster, (value, key) => {
          console.log(key);
        });

        ReactDOM.render(multipleMaster, document.getElementById('list-master'));
        ReactDOM.render(multipleChild, document.getElementById('list-child'));

      });

    };

    // create a network
    let container = document.getElementById('mynetwork');
    let data = {
      nodes: nodes,
      edges: edges
    };
    let options = {};
    window.network = new vis.Network(container, data, options);

    // setTimeout(fn, 5000)
    setInterval(() => {
      fn();
      // network.stabilize()
    }, 1000);

  }

  render () {
    return (
      <div className='container'>

        <div className="row" style={{marginTop: '20px'}}>

          <Info/>

          <div className='col-7'>
            <div id='list-master'/>
          </div>

        </div>

        <div className="row" style={{marginTop: '20px'}}>

          <Topology height={'400px'}/>

        </div>


      </div>
    );
  }
}

ReactDOM.render(<Container/>, document.getElementById('app'));
