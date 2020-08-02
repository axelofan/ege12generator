import React from 'react'

class MaskCount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...props.data, showAnswer:false}
    }

    showAnswer = () => this.setState({showAnswer:true})

    render() {
        return (
          <div>
            <p>Для узла с IP адресом {this.state.ip.join('.')} адрес сети равен {this.state.net.join('.')}. Для скольких различных значений маски это возможно?</p>
            <p onClick={this.showAnswer}>Ответ: <span className={this.state.showAnswer ? '' : 'hide'}>{this.state.maskCount}</span></p>
          </div>
        );
      }
}

export default MaskCount