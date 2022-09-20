import React from 'react';

import Grid from '@mui/material/Grid';

import GreetingBlock from '../components/GreetingBlock';
import AboutBlock from '../components/AboutBlock';

function Home() {
	return (
		<Grid container direction='column'>
			<Grid item>
				<GreetingBlock />
			</Grid>
			<Grid item>
				<AboutBlock />
			</Grid>
		</Grid>
	);
}

export default Home;
