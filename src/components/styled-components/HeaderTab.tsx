import {styled} from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import type {TabProps} from '@mui/material/Tab';
import type {Link} from 'react-router-dom';

type HeaderTabProps = TabProps & {
	component: typeof Link;
	to: string;
};

const HeaderTab = styled(Tab)<HeaderTabProps>(({theme}) => ({
	color: theme.palette.text.primary,
	minWidth: '10em',
}));

export default HeaderTab;
