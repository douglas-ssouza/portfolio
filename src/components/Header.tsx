import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';

import HeaderTab from './styled-components/HeaderTab';

import headerIcon from '../assets/logos/icon_192.png';

function Header() {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	useEffect(() => {
		const handleTabChange = () => {
			const {pathname} = window.location;

			switch (pathname) {
				case '/':
					setValue(0);
					break;
				case '/about':
					setValue(1);
					break;
				case '/projects':
					setValue(2);
					break;
				case '/skills':
					setValue(3);
					break;
				case '/contact':
					setValue(4);
					break;
				default:
					break;
			}
		};

		handleTabChange();
	}, [value]);

	return (
		<>
			<AppBar>
				<Toolbar>
					<Button
						disableRipple
						component={Link}
						to='/'
						onClick={() => {
							setValue(0);
						}}
					>
						<img src={headerIcon} alt='Icon with initials "DS"' width='50em' />
					</Button>
					<Tabs
						sx={{ml: 'auto'}}
						value={value}
						onChange={handleChange}
						TabIndicatorProps={{style: {display: 'none'}}}
					>
						<HeaderTab
							component={'a'}
							href='#home'
							disableRipple
							label='Home'
							selected={value === 0}
						/>
						<HeaderTab
							component={'a'}
							href='#about'
							disableRipple
							label='Sobre mim'
							selected={value === 1}
						/>
						<HeaderTab
							component={'a'}
							href='#projects'
							disableRipple
							label='Projetos'
							selected={value === 2}
						/>
						<HeaderTab
							component={'a'}
							href='#skills'
							disableRipple
							label='Habilidades'
							selected={value === 3}
						/>
						<HeaderTab
							component={'a'}
							href='#contact'
							disableRipple
							label='Contato'
							selected={value === 4}
						/>
					</Tabs>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
}

export default Header;
