import {createTheme} from '@mui/material/styles';

const surfaceOrange = '#FF5E1E';
const surfaceBrown = '#201F1B';
const surfaceGrey = '#3F3C37';
const textGrey = '#CCC6BA';
const textWhite = '#FFFFFF';

const theme = createTheme({
	palette: {
		primary: {
			main: surfaceOrange,
		},
		secondary: {
			main: surfaceBrown,
		},
		text: {
			primary: textWhite,
			secondary: textGrey,
		},
		background: {
			paper: surfaceGrey,
			default: surfaceBrown,
		},
	},
});

export default theme;
