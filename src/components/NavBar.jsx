import "./NavBar.css";
import Logo from "./Logo";
const NavBar = () => {
	return (
		<div id="navbar__container">
			<Logo />
			<div id="navbar__links-section">
				<a className="navbar__link">About us</a>
				<a>Services</a>
				<a className="navbar__link-box">Contact us</a>
			</div>
		</div>
	);
};

export default NavBar;
