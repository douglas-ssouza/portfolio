import React from 'react';

import {ThemeProvider} from '@mui/material/styles';

import Routes from './Routes';

import Header from './components/Header';

import theme from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Routes />
		</ThemeProvider>
	);
}

export default App;
