import React from 'react';

import {useTheme} from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Carousel from 'react-material-ui-carousel';

import ProjectPreview from './ProjectPreview';

import projects from '../../data/projects';

function ProjectsBlock() {
	const theme = useTheme();
	const matchesMedium = useMediaQuery(theme.breakpoints.down('lg'));

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
			<Grid item sx={{mb: '3em'}}>
				<Typography
					component='h2'
					variant='h3'
					align={matchesMedium ? 'center' : 'left'}
				>
					Projetos
				</Typography>
			</Grid>
			<Grid item>
				<Carousel
					interval={5000}
					animation='slide'
					duration={1000}
					fullHeightHover
				>
					{
						projects.map(project => (
							<ProjectPreview key={project.name} project={project} />
						))
					}
				</Carousel>
			</Grid>
		</Grid>
	);
}

export default ProjectsBlock;
