import React from 'react';

import {useTheme} from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import developer from '../assets/illustrations/developer.svg';

function GreetingBlock() {
	const theme = useTheme();

	return (
		<Grid
			container
			justifyContent='space-evenly'
			alignItems='center'
			sx={{height: '40em', backgroundColor: theme.palette.primary.main}}
		>
			<Grid item textAlign='center'>
				<img
					src={developer}
					alt='Illustration of a person sitting in front of a computer'
					width='400em'
				/>
			</Grid>
			<Grid item>
				<Typography component='h3' variant='h4'>
						Oi, Eu sou o
				</Typography>
				<Typography component='h1' variant='h1'>
					Douglas
				</Typography>
				<Typography component='h2' variant='h4'>
					Desenvolvedor de Software
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
		</Grid>
	);
}

export default GreetingBlock;
