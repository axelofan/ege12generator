import React from 'react';

class FindNet extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...props.data };
	}

	getBinary = (n) => n.toString(2).padStart(8, '0');

	getBinaryAdress = (adress) => adress.map((el) => this.getBinary(el)).join('.');

	showAnswer = () => this.setState({ showAnswer: !this.state.showAnswer });

	render() {
		return (
			<div>
				<p>
					По заданным IP-адресу узла и маске определите адрес сети:
					<br />
					IP-адрес: {this.state.ip.join('.')} Маска: {this.state.mask.join('.')}
				</p>
				<p onClick={this.showAnswer}>
					<span className='hintButton'>Решение:</span>
				</p>
				<div className={this.state.showAnswer ? '' : 'hide'}>
					<h1>Аналитическое решение</h1>
					<p>Запишем IP адрес и маску сети в двоичном виде. Найдём адрес сети используя поразрядную конъюнкцию.</p>
					<p className='code'>
						<span className='bold'>IP&nbsp;&nbsp;</span> {this.getBinaryAdress(this.state.ip)}
						<br />
						<span className='bold'>Mask</span> {this.getBinaryAdress(this.state.mask)}
						<br />
						<span className='bold'>Net&nbsp;</span> <span className='important'>{this.getBinaryAdress(this.state.net)}</span>{' '}
					</p>
					<p>Переведём полученный значения в десятичный вид и запишем ответ</p>
					<h1>Программное решение</h1>
					<pre>
						from ipaddress import *<br />
						net = ip_network('{this.state.ip.join('.')}/{this.state.mask.join('.')}', 0) <br />
						print(net)
					</pre>
					<p>
						<span className='bold'>Ответ:</span> {this.state.net.join('.')}
					</p>
				</div>
			</div>
		);
	}
}

export default FindNet;
