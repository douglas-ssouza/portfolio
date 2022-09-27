import React from 'react';

import {useTheme} from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import CustomButton from '../styled-components/CustomButton';

import developer from '../../assets/illustrations/developer.svg';

function GreetingBlock() {
	const theme = useTheme();
	const matchesSmall = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Grid
			container
			justifyContent='space-evenly'
			alignItems='center'
			sx={{
				minHeight: '40em',
				padding: '3em',
				backgroundColor: theme.palette.primary.main,
			}}
		>
			<Grid item textAlign='center' sx={{mb: '3em'}}>
				<img
					src={developer}
					alt='Illustration of a person sitting in front of a computer'
					width='400em'
				/>
			</Grid>
			<Grid item textAlign={matchesSmall ? 'center' : 'left'}>
				<Typography component='h4' variant='h4'>
						Oi, Eu sou o
				</Typography>
				<Typography component='h1' variant='h1'>
					Douglas
				</Typography>
				<Typography component='h2' variant='h4'>
					Desenvolvedor de Software
				</Typography>
				<CustomButton
					variant='contained'
					component='a'
					href='https://www.linkedin.com/in/douglasssouza'
					target='_blank'
					sx={{mt: '2em'}}
				>
					Linkedin
				</CustomButton>
			</Grid>
		</Grid>
	);
}

export default GreetingBlock;
