import React from 'react';

import Grid from '@mui/material/Grid';

import ProfilePicture from '../components/styled-components/ProfilePicture';

import picture from '../assets/picture.jpg';

function Home() {
	return (
		<Grid container>
			<Grid item>
				<ProfilePicture src={picture} alt='Picture of Douglas Souza' />
			</Grid>
		</Grid>
	);
}

export default Home;
