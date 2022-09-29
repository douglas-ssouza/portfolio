import React from 'react';

import {useTheme} from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';
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
	const matchesMedium = useMediaQuery(theme.breakpoints.down('lg'));

	return (
		<Grid container>
			<Grid item>
				<Typography
					component='h3'
					variant='h5'
					align={matchesMedium ? 'center' : 'left'}
					color={theme.palette.grey[300]}
				>
					{project.name}
				</Typography>
			</Grid>
			<Grid item container justifyContent='space-between'>
				<Grid
					item
					sx={{
						width: matchesMedium ? '100%' : '60%',
						mb: matchesMedium ? '2em' : 0,
					}}
				>
					<img
						src={project.image}
						alt={`Screenshot of ${project.name} page`}
						width='100%'
					/>
				</Grid>
				<Grid
					item
					container
					direction='column'
					sx={{width: matchesMedium ? '100%' : '30%'}}
				>
					<Grid item sx={{mb: '2em'}}>
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
							<CustomButton variant='contained' sx={{width: '7.5em'}}>
								Projeto
							</CustomButton>
						</Grid>
						<Grid item>
							<CustomButton variant='contained' sx={{width: '7.5em'}}>
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
