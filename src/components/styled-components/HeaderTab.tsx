/* eslint-disable @typescript-eslint/naming-convention */
import {styled} from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import type {TabProps} from '@mui/material/Tab';
import type {Link} from 'react-router-dom';

type HeaderTabProps = TabProps & {
	component: string;
	href: string;
	selected: boolean;
};

const HeaderTab = styled(Tab)<HeaderTabProps>(({theme}) => ({
	minWidth: '10em',
	marginRight: '0.5em',
	color: 'white',
	opacity: 0.7,
	'&:hover': {
		opacity: 1,
	},
	'&.Mui-selected': {
		color: 'white',
		opacity: 1,
	},
}));

export default HeaderTab;
