/* eslint-disable @typescript-eslint/naming-convention */
import {styled} from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import type {TabProps} from '@mui/material/Tab';
import type {Link} from 'react-router-dom';

type HeaderTabProps = TabProps & {
	component: typeof Link;
	to: string;
	selected: boolean;
};

const HeaderTab = styled(Tab)<HeaderTabProps>(({theme}) => ({
	color: theme.palette.text.primary,
	minWidth: '10em',
	marginRight: '2em',
	'&:hover': {
		color: theme.palette.primary.main,
		opacity: 1,
	},
	'& .Mui-selected': {
		color: theme.palette.primary.main,
	},
}));

export default HeaderTab;
