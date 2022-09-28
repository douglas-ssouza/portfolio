import React from 'react';

import {useTheme} from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import CustomButton from '../styled-components/CustomButton';

type Props = {
	project: {
		name: string;
		image: string;
		firstParagraph: string;
		secondParagraph: string;
	};
};

function ProjectPreview({project}: Props) {
	const theme = useTheme();

	return (
		<Grid container>
			<Grid item sx={{mb: 2}}>
				<Typography component='h3' variant='h5' color={theme.palette.grey[300]}>
					{project.name}
				</Typography>
			</Grid>
			<Grid item container>
				<Grid item xs={12} md={8}>
					<img src={project.image} alt={`Screenshot of ${project.name} page`} width='90%' />
				</Grid>
				<Grid item container direction='column' justifyContent='space-evenly' xs={12} md={4}>
					<Grid item>
						<Typography
							component='p'
							variant='body1'
							paragraph
							color={theme.palette.grey[300]}
						>
							{project.firstParagraph}
						</Typography>
						<Typography
							component='p'
							variant='body1'
							paragraph
							color={theme.palette.grey[300]}
						>
							{project.secondParagraph}
						</Typography>
					</Grid>
					<Grid item container justifyContent='space-evenly'>
						<Grid item>
							<CustomButton variant='contained' sx={{width: '8.5em'}}>
								Projeto
							</CustomButton>
						</Grid>
						<Grid item>
							<CustomButton variant='contained' sx={{width: '8.5em'}}>
								Repositório
							</CustomButton>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default ProjectPreview;
