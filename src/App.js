import React from 'react';
import './App.css'

function randint(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function konjunction(n1, n2) {
  let result = 0
  for (let i=0; i<8; i++) {
    result+= n1%2 * n2%2 * Math.pow(2,i)
    n1=n1/2>>0
    n2=n2/2>>0
  }
  return result
}

function generateIP() {
  const result=[]
  for(let i=0;i<4;i++) result.push(randint(50,255))
  return result
}

function generateMask() {
  const result=[]
  const byte = [0, 128, 192, 224, 240, 248, 252, 254, 255]
  let count1 = randint(16,29)
  for(let i=0;i<4;i++) {
    if (count1>8) {
      result.push(255)
      count1-=8
    }
    else {
      result.push(byte[count1])
      count1=0
    }
  }
  return result
}

function getNet(ip, mask) {
  let result=[]
  for(let i=0;i<4;i++) result.push(konjunction(ip[i],mask[i]))
  return result
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {ip: generateIP(), mask: generateMask(), showAnswer:false}
  }

  net = () => getNet(this.state.ip, this.state.mask);

  showAnswer = () => this.setState({showAnswer:true})

  render() {
    return (
      <div>
        <p>По заданным IP-адресу узла и маске определите адрес сети:</p>
        <p>IP-адрес: {this.state.ip.join('.')} Маска: {this.state.mask.join('.')}</p>
        <p onClick={this.showAnswer}>Ответ: <span className={this.state.showAnswer ? '' : 'hide'}>{this.net().join('.')}</span></p>
      </div>
    );
  }

}

export default App