import React from 'react';
import {Routes as Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

const About = () => <h1>About</h1>;
const Projects = () => <h1>Projects</h1>;
const Skills = () => <h1>Skills</h1>;
const Contact = () => <h1>Contact</h1>;

function Routes() {
	return (
		<>
			<Header />
			<Switch>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/skills' element={<Skills />} />
				<Route path='/contact' element={<Contact />} />
			</Switch>
		</>
	);
}

export default Routes;
