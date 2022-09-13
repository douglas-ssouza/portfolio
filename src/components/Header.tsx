import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

import headerIcon from '../assets/icon_180.png';

function Header() {
	return (
		<>
			<AppBar color='secondary'>
				<Toolbar>
					<Grid container>
						<Grid item>
							<img
								src={headerIcon}
								alt='Header icon with initials DS'
								style={{padding: '.5em', width: '80px'}}
							/>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
}

export default Header;
