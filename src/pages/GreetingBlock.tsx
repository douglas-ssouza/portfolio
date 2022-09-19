import React from 'react';

import {useTheme} from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ProfilePicture from '../components/styled-components/ProfilePicture';

import picture from '../assets/picture.jpg';

function GreetingBlock() {
	const theme = useTheme();

	return (
		<Grid
			container
			justifyContent='space-evenly'
			alignItems='center'
			sx={{height: '30em', backgroundColor: theme.palette.background.paper}}
		>
			<Grid item>
				<Typography component='h3' variant='h4'>
						Oi, Eu sou o
				</Typography>
				<Typography component='h1' variant='h1'>
					Douglas Souza
				</Typography>
				<Typography component='h2' variant='h4'>
					Desenvolvedor Front-end
				</Typography>
				<Button
					variant='contained'
					color='primary'
					component='a'
					href='https://www.linkedin.com/in/douglasssouza'
					target='_blank'
				>
					Linkedin
				</Button>
			</Grid>
			<Grid item>
				<ProfilePicture src={picture} alt='Picture of Douglas Souza' />
			</Grid>
		</Grid>
	);
}

export default GreetingBlock;
