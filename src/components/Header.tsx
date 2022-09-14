import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';

import HeaderTab from './styled-components/HeaderTab';

import headerIcon from '../assets/icon_180.png';

function Header() {
	return (
		<>
			<AppBar color='secondary'>
				<Toolbar>
					<Button>
						<img src={headerIcon} alt='Icon with initials "DS"' width='50em' />
					</Button>
					<Tabs sx={{ml: 'auto'}}>
						<HeaderTab disableRipple label='Home' />
						<HeaderTab disableRipple label='Sobre mim' />
						<HeaderTab disableRipple label='Projetos' />
						<HeaderTab disableRipple label='Contato' />
						<HeaderTab disableRipple label='Habilidades' />
					</Tabs>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
}

export default Header;
