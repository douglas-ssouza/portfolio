import {createTheme} from '@mui/material/styles';

const surfaceOrange = '#FF5E1E';
const surfaceBlack = '#201F1B';
const surfaceGrey = '#3F3C37';
const fontGrey = 'CCC6BA';
const fontWhite = 'FFFFFF';

const paletteTheme = createTheme({
	palette: {
		primary: {main: surfaceOrange},
		secondary: {main: surfaceBlack},
		terciary: {main: surfaceGrey},
		fontWhite,
		fontGrey,
		background: {
			paper: surfaceGrey,
			default: surfaceBlack,
		},
	},
});

export default paletteTheme;
