import type {Theme, ThemeOptions} from '@mui/material/styles';

declare module '@mui/material/styles' {
	type CustomTheme = Theme & {
		palette: {
			terciary: {main: string};
		};
	};

	type CustomThemeOptions = ThemeOptions & {
		palette: {
			terciary?: {main?: string};
			fontWhite?: string;
			fontGrey?: string;
		};
	};

	export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
