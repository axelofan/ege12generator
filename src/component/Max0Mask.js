import React from 'react'

class Max0Mask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...props.data, showAnswer:false}
    }

    showAnswer = () => this.setState({showAnswer:true})

    render() {
        return (
          <div>
            <p>Для узла с IP адресом {this.state.ip.join('.')} адрес сети равен {this.state.net.join('.')}. Найдите наибольшее возможное количество нулей в двоичной записи маски подсети.</p>
            <p onClick={this.showAnswer}>Ответ: <span className={this.state.showAnswer ? '' : 'hide'}>{32-this.state.minCount}</span></p>
          </div>
        );
      }
}

export default Max0Mask