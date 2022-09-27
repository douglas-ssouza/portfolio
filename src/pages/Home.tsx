import React from 'react';

import Grid from '@mui/material/Grid';

import GreetingBlock from '../components/landing-page/GreetingBlock';
import AboutBlock from '../components/landing-page/AboutBlock';
import ProjectsBlock from '../components/landing-page/ProjectsBlock';
import SkillsBlock from '../components/landing-page/SkillsBlock';

function Home() {
	return (
		<Grid container direction='column'>
			<Grid item>
				<GreetingBlock />
			</Grid>
			<Grid item>
				<AboutBlock />
			</Grid>
			<Grid item>
				<ProjectsBlock />
			</Grid>
			<Grid item>
				<SkillsBlock />
			</Grid>
		</Grid>
	);
}

export default Home;
