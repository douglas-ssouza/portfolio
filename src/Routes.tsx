import React from 'react';
import {Routes as Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

function Routes() {
	return (
		<>
			<Header />
			<Switch>
				<Route path='/' element={<Home />} />
			</Switch>
		</>
	);
}

export default Routes;
