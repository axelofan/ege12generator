import React from 'react';

class Max3rdMask extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...props.data };
	}

	getBinary = (n) => n.toString(2).padStart(8, '0');

	getBinaryAdress = (adress) => adress.map((el) => this.getBinary(el)).join('.');

	getBinaryMask = () => {
		let minMask = this.getBinary(this.state.minMask[2]);
		let maxMask = this.getBinary(this.state.maxMask[2]);

		let mask = [].map.call(minMask, (el, i) => (minMask[i] === maxMask[i] ? el : '*'));

		return mask;
	};

	showAnswer = () => this.setState({ showAnswer: !this.state.showAnswer });

	render() {
		return (
			<div>
				<p>
					Для узла с IP адресом {this.state.ip.join('.')} адрес сети равен {this.state.net.join('.')}. Чему равно наибольшее возможное значение третьего слева байта маски? Ответ запишите в виде
					десятичного числа.
				</p>
				<p onClick={this.showAnswer}>
					<span className='hintButton'>Решение:</span>
				</p>
				<div className={this.state.showAnswer ? '' : 'hide'}>
					<h1>Аналитическое решение</h1>
					<p>Запишем третий байт IP адреса и адреса сети в двоичном виде. Подберём значения в маске так, чтобы выполнялась поразрядная конъюнкция.</p>
					<p className='code'>
						<span className='bold'>IP&nbsp;&nbsp;</span> {this.getBinary(this.state.ip[2])}
						<br />
						<span className='bold'>Mask</span> <span className='important'>{this.getBinaryMask()}</span>
						<br />
						<span className='bold'>Net&nbsp;</span> {this.getBinary(this.state.net[2])}
					</p>
					<p> Максимальный третий байт маски тогда примет вид {this.getBinary(this.state.maxMask[2])}. Переведём полученное значение в десятичный вид и запишем ответ.</p>
					<h1>Программное решение</h1>
					<pre>
						from ipaddress import *<br />
						for mask in range(33):
						<br />
						&nbsp;&nbsp;net = ip_network(f'{this.state.ip.join('.')}/{`{mask}`}',0)
						<br />
						&nbsp;&nbsp;if str(net) == f'{this.state.net.join('.')}/{`{mask}`}':
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;print(net.netmask)
						<br />
					</pre>
					<p>
						<span className='bold'>Ответ:</span> {this.state.maxMask[2]}
					</p>
				</div>
			</div>
		);
	}
}

export default Max3rdMask;
