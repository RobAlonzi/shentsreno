import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from "./components/home";
import Contact from "./components/contact";
import renderComponentWithSidebar from "./components/renderComponentWithSidebar";

import reducers from './reducers';

import "normalize.css";
import "./main.scss";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<Switch>
				<Route path="/contact" component={renderComponentWithSidebar(Contact)} />
				<Route exact path="/" component={renderComponentWithSidebar(Home)} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);