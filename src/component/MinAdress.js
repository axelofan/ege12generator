import React from 'react'

class MinAdress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...props.data, showAnswer:false}
    }

    showAnswer = () => this.setState({showAnswer:true})

    render() {
        return (
          <div>
            <p>Для узла с IP адресом {this.state.ip.join('.')} адрес сети равен {this.state.net.join('.')}. Чему равно наименьшее количество возможных адресов в этой сети?</p>
            <p onClick={this.showAnswer}>Ответ: <span className={this.state.showAnswer ? '' : 'hide'}>{2**(32-this.state.maxCount)}</span></p>
          </div>
        );
      }
}

export default MinAdress