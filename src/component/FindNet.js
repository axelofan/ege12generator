import React from 'react'

class FindNet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...props.data, showAnswer:false}
    }

    showAnswer = () => this.setState({showAnswer:true})

    render() {
        return (
          <div>
            <p>По заданным IP-адресу узла и маске определите адрес сети:</p>
            <p>IP-адрес: {this.state.ip.join('.')} Маска: {this.state.mask.join('.')}</p>
            <p onClick={this.showAnswer}>Ответ: <span className={this.state.showAnswer ? '' : 'hide'}>{this.state.net.join('.')}</span></p>
          </div>
        );
      }
}

export default FindNet