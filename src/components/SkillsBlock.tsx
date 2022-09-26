import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import thinking from '../assets/illustrations/thinking.svg';
import css3 from '../assets/techs/css3.png';
import html5 from '../assets/techs/html5.png';
import javascript from '../assets/techs/javascript.png';
import jest from '../assets/techs/jest.png';
import mongodb from '../assets/techs/mongodb.png';
import mysql from '../assets/techs/mysql.png';
import nodejs from '../assets/techs/nodejs.png';
import redux from '../assets/techs/redux.png';
import typescript from '../assets/techs/typescript.png';
import react from '../assets/techs/react.png';

function SkillsBlock() {
	const techs = [
		{image: html5, name: 'HTML5'},
		{image: css3, name: 'CSS3'},
		{image: javascript, name: 'JavaScript'},
		{image: react, name: 'React'},
		{image: redux, name: 'Redux'},
		{image: typescript, name: 'TypeScript'},
		{image: jest, name: 'Jest'},
		{image: nodejs, name: 'NodeJs'},
		{image: mongodb, name: 'MongoDB'},
		{image: mysql, name: 'MySQL'},
	];

	return (
		<Grid container direction='column'>
			<Grid item sx={{my: 3}}>
				<Typography component='h2' variant='h3' align='center'>
					Habilidades
				</Typography>
			</Grid>
			<Grid item container>
				<Grid item xs={12} md={6}>
					<img
						src={thinking}
						alt='illustration of person sitting next to a computer'
						width='600em'
					/>
				</Grid>
				<Grid item container xs={12} md={6} spacing={4}>
					{
						techs.map(({image, name}) => (
							<Grid item key={name}>
								<img src={image} alt={name} width='100em' />
							</Grid>
						))
					}
				</Grid>
			</Grid>
		</Grid>
	);
}

export default SkillsBlock;
