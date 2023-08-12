import React, { useContext, useState } from 'react'
import '../sass/components/ToogleDarkMode.scss'
import { ThemeContext } from '../context/ThemeContext';

const ToogleDarkMode: React.FC = () => {

	const {theme, setTheme} = useContext(ThemeContext);
	const [modeValue, setModeValue] = useState<string>('LIGHT');
	const [iconType, setIconType] = useState<string>('fa-sun');

	const themeModeHandler = () => {
		const isCurrentDark = theme === 'dark';
		setTheme(isCurrentDark ? 'light' : 'dark');
	}

	const modeChangeHandler = () => {
		themeModeHandler();
		if (theme === 'light') {
			setIconType('fa-moon');
			setModeValue('DARK');
		}
		else {
			setIconType('fa-sun');
			setModeValue('LIGHT');
		}
	}


	return (
		<div className='toogle-mode' onClick={modeChangeHandler}>
			<p>{modeValue}</p>
			<i className={'fa-solid ' + iconType}></i>
		</div>
	)
}

export default ToogleDarkMode;