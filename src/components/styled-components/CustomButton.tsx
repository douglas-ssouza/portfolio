/* eslint-disable @typescript-eslint/naming-convention */
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)(({theme}) => ({
	fontSize: '1.2rem',
	fontWeight: 400,
	backgroundImage: `
		linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})
	`,
	width: '12em',
	letterSpacing: 1.5,
	padding: '8px',
	'&:hover': {
		backgroundImage: `
			linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})
		`,
	},
}));

export default CustomButton as typeof Button;
