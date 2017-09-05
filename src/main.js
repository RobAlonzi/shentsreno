import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promiseMiddleware from "redux-promise";
import Feather from "feather-icons";


import Home from "./components/home";
import Contact from "./components/contact";
import Reviews from "./components/reviews";
import renderComponentWithSidebar from "./components/renderComponentWithSidebar";

import reducers from './reducers';

import "normalize.css";
import "./main.scss";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<Switch>
				<Route path="/reviews" component={renderComponentWithSidebar(Reviews)} />
				<Route path="/contact" component={renderComponentWithSidebar(Contact)} />
				<Route exact path="/" component={renderComponentWithSidebar(Home)} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);


