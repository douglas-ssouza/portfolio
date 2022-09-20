import React from 'react';

import Grid from '@mui/material/Grid';

import GreetingBlock from '../components/GreetingBlock';
import AboutBlock from '../components/AboutBlock';
import ProjectsBlock from '../components/ProjectsBlock';

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
		</Grid>
	);
}

export default Home;
