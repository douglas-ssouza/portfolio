import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type Props = {
	name: string;
	image: string;
};

function ProjectPreview({name, image}: Props) {
	return (
		<Grid container>
			<Grid item sx={{mb: 2}}>
				<Typography component='h3' variant='h5'>
					{name}
				</Typography>
			</Grid>
			<Grid item container>
				<Grid item xs={12} md={8}>
					<img src={image} alt={`Screenshot of ${name} page`} width='90%' />
				</Grid>
				<Grid item container direction='column' justifyContent='space-evenly' xs={12} md={4}>
					<Grid item>
						<Typography component='p' variant='body1' paragraph>
							Aplicação web que consome dados de uma api do iTunes. Nele, quem usa, pode pesquisar por bandas ou artistas e encontrar seus respectivos álbuns, ver detalhes dos álbuns e músicas, ouvir trechos e selecionar músicas para serem salvas como favoritas.
						</Typography>
						<Typography component='p' variant='body1' paragraph>
							Projeto desenvolvido durante o curso de desenvolvimento web da trybe utilizando ReactJS, TypeScript, Context API e Material UI.
						</Typography>
					</Grid>
					<Grid item container justifyContent='space-evenly'>
						<Grid item>
							<Button variant='contained' color='secondary'>
								Detalhes
							</Button>
						</Grid>
						<Grid item>
							<Button variant='contained' color='secondary'>
								Repositório
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default ProjectPreview;
