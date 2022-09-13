import React from 'react';

import {ThemeProvider} from '@mui/material/styles';

import Header from './components/Header';

import theme from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
		</ThemeProvider>
	);
}

export default App;
