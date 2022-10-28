import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
import Home from './Home';
import HowitWorks from './HowitWorks';
import './App.css';
import EC from '../Images/kominfo.png';

class WebApp extends Component {
	render() {
		return (
			<div>
				<Router>
					<div>
						<ul style={{ height: "53px", listStyle:"none", backgroundColor:"#0f1615" }}>
							<li>
								<h7
									className="navbar-brand col-sm-3 col-md-2 mr-0"
									target="_blank"
									style={{ fontFamily: "Arial", paddingTop: "3px" }}
								>
									<img src={EC} width="50" height="50" className="align-top" alt="" />
								</h7>
							</li>
							<li>
								<h7
									className="navbar-brand col-sm-3 col-md-2 mr-0"
									target="_blank"
									style={{ fontSize: "23px", fontFamily: "Arial", paddingTop: "7px", fontWeight: "bold" }}
								>
								Distributed Ledger Technology
								</h7>
							</li>
							
							<li style={{ float: "right" }}><a style={{ fontSize: "15px", paddingTop: "15px", fontWeight: "bold", textDecoration: "none", color: "white" }} href="/HowitWorks">HOW IT WORKS</a></li>
							<li style={{ float: "right" }}><a style={{ fontSize: "15px", paddingTop: "15px", fontWeight: "bold", textDecoration: "none", color: "white" }} href="/App">DLT</a></li>
							<li style={{ float: "right" }}><a style={{ fontSize: "15px", paddingTop: "15px", fontWeight: "bold", textDecoration: "none", color: "white" }} href="/Home">HOME</a></li>
						</ul>
					</div>
					<Switch>
						<Route exact path="/App" component={App} />
						<Route exact path="/Home" component={Home} />
						<Route exact path="/HowitWorks" component={HowitWorks} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default WebApp;