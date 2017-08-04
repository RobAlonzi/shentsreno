import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promiseMiddleware from "redux-promise";


import Home from "./components/home";
import Contact from "./components/contact";
import renderComponentWithSidebar from "./components/renderComponentWithSidebar";

import reducers from './reducers';

import "normalize.css";
import "./main.scss";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(promiseMiddleware, thunk));



ReactDOM.render(
	<Provider store={createStore(reducers, enhancer)}>
		<BrowserRouter>
			<Switch>
				<Route path="/contact" component={renderComponentWithSidebar(Contact)} />
				<Route exact path="/" component={renderComponentWithSidebar(Home)} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);