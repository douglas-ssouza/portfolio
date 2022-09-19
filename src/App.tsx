import React from 'react';

import {ThemeProvider} from '@mui/material/styles';
import theme from './theme';

import CssBaseline from '@mui/material/CssBaseline';

import Routes from './Routes';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes />
		</ThemeProvider>
	);
}

export default App;
