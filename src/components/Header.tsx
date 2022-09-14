import React from 'react';
import {Link} from 'react-router-dom';

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
					<Button disableRipple>
						<img src={headerIcon} alt='Icon with initials "DS"' width='50em' />
					</Button>
					<Tabs sx={{ml: 'auto'}}>
						<HeaderTab component={Link} to='/' disableRipple label='Home' />
						<HeaderTab component={Link} to='/about' disableRipple label='Sobre mim' />
						<HeaderTab component={Link} to='/projects' disableRipple label='Projetos' />
						<HeaderTab component={Link} to='/contat' disableRipple label='Contato' />
						<HeaderTab component={Link} to='/skills' disableRipple label='Habilidades' />
					</Tabs>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
}

export default Header;
