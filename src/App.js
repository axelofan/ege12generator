import React from 'react';
import FindNet from './component/FindNet'
import MaskCount from './component/MaskCount'
import './App.css'
import data from './generator.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = data
  };

  getRandomTask = () => {
    let component = [
      <FindNet data = {this.state}/>,
      <MaskCount data = {this.state}/>
    ]
    if (Math.random()>0.5) return component[0]
    else return component[1]
  }

  showAnswer = () => this.setState({showAnswer:true})

  render() {
    return (
      <div>
        {this.getRandomTask()}
      </div>
    );
  }

}

export default App