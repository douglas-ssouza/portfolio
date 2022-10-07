import React from 'react';

import {useTheme} from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import social from '../../assets/illustrations/social.svg';

function SocialBlock() {
	const theme = useTheme();

	return (
		<Grid
			container
			direction='column'
			sx={{
				backgroundColor: theme.palette.primary.main,
				backgroundImage: `url(${social})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: '40em',
				p: '5em',
				color: 'white',
			}}
		>
			<Grid item>
				<Typography component='h2' variant='h3'>
					Redes Sociais
				</Typography>
			</Grid>
			<Grid
				item
				container
				justifyContent='space-between'
				alignItems='center'
				sx={{height: '30em'}}
			>
				<Grid item>
					<Button
						variant='contained'
						color='secondary'
						component='a'
						href='https://www.linkedin.com/in/douglasssouza'
						target='_blank'
						endIcon={<LinkedInIcon />}
						sx={{
							height: '3em',
							width: '8em',
							fontSize: '1.5rem',
						}}
					>
						Linkedin
					</Button>
				</Grid>
				<Grid item>
					<Button
						variant='contained'
						color='secondary'
						component='a'
						href='https://github.com/douglas-ssouza'
						target='_blank'
						endIcon={<GitHubIcon />}
						sx={{
							height: '3em',
							width: '8em',
							fontSize: '1.5rem',
						}}
					>
						Github
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default SocialBlock;
