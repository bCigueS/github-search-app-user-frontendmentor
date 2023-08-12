import ToogleDarkMode from "./ToogleDarkMode";
import '../sass/components/Header.scss';

const Header: React.FC = () => {
	return (
		<header className="header-wrapper">
			<h1>devfinder</h1>
			<ToogleDarkMode />
		</header>
	)
}

export default Header;