import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
	return (
		<AppBar>
			<Toolbar>
				<Typography component='h1' variant='h5'>
					Douglas Souza
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
