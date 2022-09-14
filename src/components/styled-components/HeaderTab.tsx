import {styled} from '@mui/material/styles';
import Tab from '@mui/material/Tab';

const HeaderTab = styled(Tab)(({theme}) => ({
	color: theme.palette.text.primary,
	minWidth: '10em',
})) as typeof Tab;

export default HeaderTab;
