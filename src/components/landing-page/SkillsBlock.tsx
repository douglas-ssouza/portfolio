import React from 'react';

import {useTheme} from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import techs from '../../data/techs';

import thinking from '../../assets/illustrations/thinking.svg';

function SkillsBlock() {
	const theme = useTheme();
	const matchesMedium = useMediaQuery(theme.breakpoints.down('lg'));

	return (
		<Grid
			container
			direction='column'
			sx={{backgroundColor: theme.palette.grey[300], padding: '5em'}}
		>
			<Grid item sx={{mb: '3em'}}>
				<Typography component='h2' variant='h3' align={matchesMedium ? 'center' : 'left'}>
					Habilidades
				</Typography>
			</Grid>
			<Grid item container justifyContent='space-between' alignItems='center'>
				<Grid item sx={{width: '50%'}}>
					<img
						src={thinking}
						alt='illustration of person sitting next to a computer'
						width='100%'
					/>
				</Grid>
				<Grid item container sx={{width: '45%'}} spacing={2} justifyContent='center'>
					{
						techs.map(({image, name}) => (
							<Grid item key={name} xs={3} textAlign='center'>
								<img src={image} alt={name} width='80em' />
								<Typography component='p' variant='caption'>{name}</Typography>
							</Grid>
						))
					}
				</Grid>
			</Grid>
		</Grid>
	);
}

export default SkillsBlock;
