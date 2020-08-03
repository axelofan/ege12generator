import React from 'react'

class Max3rdMask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...props.data, showAnswer:false}
    }

    showAnswer = () => this.setState({showAnswer:true})

    render() {
        return (
          <div>
            <p>Для узла с IP адресом {this.state.ip.join('.')} адрес сети равен {this.state.net.join('.')}. Чему равно наибольшее возможное значение третьего слева байта маски? Ответ запишите в виде десятичного числа.</p>
            <p onClick={this.showAnswer}>Ответ: <span className={this.state.showAnswer ? '' : 'hide'}>{this.state.maxMask[2]}</span></p>
          </div>
        );
      }
}

export default Max3rdMask