import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Carousel from 'react-material-ui-carousel';

function ProjectsBlock() {
	return (
		<Grid container direction='column'>
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
