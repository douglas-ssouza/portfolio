import React from 'react';

import Grid from '@mui/material/Grid';

import GreetingBlock from '../components/landing-page/GreetingBlock';
import AboutBlock from '../components/landing-page/AboutBlock';
import ProjectsBlock from '../components/landing-page/ProjectsBlock';
import SkillsBlock from '../components/landing-page/SkillsBlock';
import Footer from '../components/Footer';

function Home() {
	return (
		<Grid container direction='column'>
			<Grid item id='home'>
				<GreetingBlock />
			</Grid>
			<Grid item id='about'>
				<AboutBlock />
			</Grid>
			<Grid item id='projects'>
				<ProjectsBlock />
			</Grid>
			<Grid item id='skills'>
				<SkillsBlock />
			</Grid>
			<Grid item>
				<Footer />
			</Grid>
		</Grid>
	);
}

export default Home;
