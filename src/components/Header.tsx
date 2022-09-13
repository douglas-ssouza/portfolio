import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import headerIcon from '../assets/icon_180.png';

function Header() {
	return (
		<>
			<AppBar color='secondary'>
				<Toolbar>
					<Button>
						<img src={headerIcon} alt='Icon with initials "DS"' width='50em' />
					</Button>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
}

export default Header;
