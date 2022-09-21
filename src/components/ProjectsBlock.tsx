import React from 'react';

import {useTheme} from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Carousel from 'react-material-ui-carousel';

function ProjectsBlock() {
	const theme = useTheme();

	return (
		<Grid container direction='column' sx={{backgroundColor: theme.palette.secondary.light}}>
			<Grid item>
				<Typography component='h2' variant='h3'>
					Projetos
				</Typography>
			</Grid>
			<Grid item>
				<Carousel>
					<div>
						<Typography variant='h6'>Trybetunes</Typography>
						<div style={{height: '10em', width: '100%', background: 'red'}}></div>
					</div>
					<div>
						<Typography variant='h6'>Trivia</Typography>
						<div style={{height: '10em', width: '100%', background: 'green'}}></div>
					</div>
				</Carousel>
			</Grid>
		</Grid>
	);
}

export default ProjectsBlock;
