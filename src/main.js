import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./components/header";
import App from "./components/app";
import Contact from "./components/contact";

import "normalize.css";
import "./main.scss";

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Header />
			<div className="page-wrap">
				<Switch>
					<Route path="/contact" component={Contact} />
					<Route exact path="/" component={App} />
				</Switch>
			</div>
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);