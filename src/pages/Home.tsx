import React from 'react';

import Grid from '@mui/material/Grid';

import GreetingBlock from './GreetingBlock';

function Home() {
	return (
		<Grid container direction='column'>
			<Grid item>
				<GreetingBlock />
			</Grid>
		</Grid>
	);
}

export default Home;
