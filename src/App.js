import React from 'react';

import FindNet from './component/FindNet'
import Get3rdMask from './component/Get3rdMask'
import MaskCount from './component/MaskCount'
import Min3rdMask from './component/Min3rdMask'
import Max3rdMask from './component/Max3rdMask'
import Min1Mask from './component/Min1Mask'
import Max1Mask from './component/Max1Mask'
import Min0Mask from './component/Min0Mask'
import Max0Mask from './component/Max0Mask'
import MaxAdress from './component/MaxAdress'
import MinAdress from './component/MinAdress'

import './App.css'
import data from './generator'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...data, showAnswer:true}
  };

  getRandomTask = () => {
    let component = []

    if (this.state.maskCount>1) {
      component.push(
        <MaskCount data = {this.state}/>, 
        <Min1Mask data = {this.state}/>, 
        <Max1Mask data = {this.state}/>, 
        <Min0Mask data = {this.state}/>,
        <Max0Mask data = {this.state}/>
      )

      if (0<this.state.minMask[2] && this.state.minMask[2]<255) component.push(<Min3rdMask data = {this.state}/>)
      if (0<this.state.minMask[2] && this.state.minMask[2]<255) component.push(<Max3rdMask data = {this.state}/>)
      if (2**(32-this.state.maxCount)<1024) component.push(<MinAdress data = {this.state}/>)
      if (2**(32-this.state.minCount)<1024) component.push(<MaxAdress data = {this.state}/>)
    }
    else component.push(<FindNet data = {this.state}/>, <Get3rdMask data={this.state}/>)
    
    let i = Math.floor(Math.random() * component.length)
    return component[i]
  }

  render() {
    return (
      <div>
        <p><span className='number'>12</span> В терминологии сетей TCP/IP маской сети называется двоичное число, определяющее, какая часть IP-адреса узла сети относится к адресу сети, а какая – к адресу самого узла в этой сети. При этом в маске сначала (в старших разрядах) стоят единицы, а затем с некоторого места – нули. Обычно маска записывается по тем же правилам, что и IP-адрес, – в виде четырёх байтов, причём каждый байт записывается в виде десятичного числа. Адрес сети получается в результате применения поразрядной конъюнкции к заданному IP-адресу узла и маске. Например, если IP-адрес узла равен 231.32.255.131, а маска равна 255.255.240.0, то адрес сети равен 231.32.240.0.</p>
        {this.getRandomTask()}
      </div>
    );
  }

}

export default App