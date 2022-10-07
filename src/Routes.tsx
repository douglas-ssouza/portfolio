import React from 'react';
import {Routes as Switch, Route} from 'react-router-dom';

import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

const About = () => <h1>About</h1>;
const Projects = () => <h1>Projects</h1>;
const Skills = () => <h1>Skills</h1>;
const Contact = () => <h1>Contact</h1>;

function Routes() {
	const theme = useTheme();
	const mediumDown = useMediaQuery(theme.breakpoints.down('md'));

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
			{ !mediumDown && <Footer /> }
		</>
	);
}

export default Routes;
