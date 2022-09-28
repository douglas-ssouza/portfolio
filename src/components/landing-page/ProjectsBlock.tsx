import React from 'react';

import {useTheme} from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Carousel from 'react-material-ui-carousel';

import ProjectPreview from './ProjectPreview';

import trybetunes from '../../assets/projects/trybetunes.png';

function ProjectsBlock() {
	const theme = useTheme();

	return (
		<Grid
			container
			direction='column'
			sx={{
				backgroundColor: theme.palette.primary.dark,
				padding: '5em',
				color: 'white',
			}}
		>
			<Grid item>
				<Typography component='h2' variant='h3'>
					Projetos
				</Typography>
			</Grid>
			<Grid item>
				<Carousel sx={{height: '30em', mt: 3}}>
					<ProjectPreview name='Trybetunes' image={trybetunes} />
				</Carousel>
			</Grid>
		</Grid>
	);
}

export default ProjectsBlock;
