import React from 'react';

import {ThemeProvider} from '@mui/material/styles';
import theme from './theme';

import Routes from './Routes';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes />
		</ThemeProvider>
	);
}

export default App;
