import React from 'react';

import {useTheme} from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
	const theme = useTheme();
	const hidden = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Grid
			container
			alignItems='center'
			justifyContent='space-between'
			sx={{
				padding: '0.35em',
				backgroundColor: theme.palette.primary.main,
			}}
		>
			<Grid item>
				<IconButton
					color='secondary'
					component='a'
					href='https://www.linkedin.com/in/douglasssouza'
					target='_blank'
					sx={{mr: '0.6em'}}
				>
					<LinkedInIcon sx={{fontSize: '2em', verticalAlign: 'text-bottom'}} />
				</IconButton>
				<IconButton
					color='secondary'
					component='a'
					href='https://github.com/douglas-ssouza'
					target='_blank'
				>
					<GitHubIcon sx={{fontSize: '2em'}} />
				</IconButton>
			</Grid>
			<Grid item>
				<Typography component='h6' variant='body2'>
					Desenvolvido por Douglas Souza com React, TypeScript e Material UI.
				</Typography>
			</Grid>
		</Grid>
	);
}

export default Footer;
