import React from 'react';
import firebase from '../../firebase';
import {Link} from 'react-router-dom';

import './Home.css';

import Chatbox from './Chatbox';
class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			message: ''
		}
	}

	handleChange = e => {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit = e => {
		
		e.preventDefault();
		if (this.state.message !== '') {
			const chatRef = firebase.database().ref('messages');
			const chat = {
				message: this.state.message,
				user: this.props.user.displayName,
				timestamp: new Date().getTime()
			}
			chatRef.push(chat);
			this.setState({message: ''});
		}
	}

	render(){
		return(
			<div className="home--container">
				<h1>Bienvenido al chat!</h1>
				{this.props.user && 
					<div className="allow-chat">
						<form className="send-chat" onSubmit={this.handleSubmit}>
							<input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} placeholder='Leave a message...' />
						</form>

						<Chatbox />
					</div>
				}
				{!this.props.user && 
					<div className="disallow-chat">
						<p><Link to="/login">Logueate</Link> o <Link to="/register">Registrate</Link> para comenzar a chatear!</p>
					</div>
				}
			</div>
		);
	}
}

export default Home;