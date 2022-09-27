import React from 'react';

import {useTheme} from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import personal from '../assets/illustrations/personal.svg';

function AboutBlock() {
	const theme = useTheme();

	return (
		<Grid container direction='column' sx={{backgroundColor: theme.palette.grey[600]}}>
			<Grid item sx={{my: 3}}>
				<Typography component='h2' variant='h3' align='center'>
					Sobre mim
				</Typography>
			</Grid>
			<Grid item container sx={{p: 3}} justifyContent='space-around'>
				<Grid item sx={{width: '40%'}}>
					<Typography component='p' variant='body1' sx={{lineHeight: '2em'}}>
						Me chamo Douglas Souza. Moro em Santa Isabel - SP.
						<br />
						Comecei a estudar programação no início de 2020, depois de passar quase dez anos atuando como professor e coordenador em diversas escolas de inglês.
						<br />
						Em 2021 decidi me matricular na
						{ ' ' }
						<a href='https://www.betrybe.com/' rel='noreferrer' target='_blank'>Trybe</a>.
						Foi lá onde aprendi boa parte das tecnologias e habilidades que domino hoje, desenvolvi meus primeiros projetos e tive minha primeira oportunidade para trabalhar com desenvolvimento de software.
						<br />
						Hoje atuo como desenvolvedor front-end utilizando tecnologias como ReactJS, TypeScript e Material UI.
					</Typography>
				</Grid>
				<Grid item sx={{width: '40%'}} >
					<img
						src={personal}
						alt='illustration of person with boxes of information'
						width='100%'
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default AboutBlock;
