import { List } from "react-bootstrap-icons";
import s from "./style.module.css";

const Navbar = () => {
	// function to change the color of items when scroll
	window.onscroll = function () {
		var btn_menu = document.getElementById("btn_menu");
		var btn_menu_icon = document.getElementById("icon");
		var logo = document.getElementById("logo");

		if (window.scrollY > 0) {
			btn_menu.classList.add(`${s.bt_menu2}`);
			btn_menu.classList.remove(`${s.bt_menu}`);

			btn_menu_icon.classList.add(`${s.listIcon2}`);
			btn_menu_icon.classList.remove(`${s.listIcon}`);

			logo.classList.add(`${s.logo2}`);
			logo.classList.remove(`${s.logo}`);
		} else if (window.scrollY === 0) {
			btn_menu.classList.add(`${s.bt_menu}`);
			btn_menu.classList.remove(`${s.bt_menu2}`);

			btn_menu_icon.classList.add(`${s.listIcon}`);
			btn_menu_icon.classList.remove(`${s.listIcon2}`);

			logo.classList.add(`${s.logo}`);
			logo.classList.remove(`${s.logo2}`);
		}
	};

	return (
		<nav className="navbar navbar-dark bg-transparent fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					<p id="logo" className={s.logo}>
						Cocktail Pedia
					</p>
				</a>

				<button
					id="btn_menu"
					className={s.bt_menu}
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar"
				>
					<List id="icon" size={30} className={s.listIcon} />
				</button>

				<div
					className="offcanvas offcanvas-end bg-transparent"
					tabIndex="-1"
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel"
				>
					<div className={s.glass}>
						<span className="offcanvas-header">
							<h5
								className="offcanvas-title text-light"
								id="offcanvasNavbarLabel"
							>
								MENU
							</h5>

							<button
								type="button"
								className="btn-close btn-close-white"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</span>

						<div className="offcanvas-body">
							<ul className="navbar-nav flex-grow-1 pe-3">
								<li>cosa1</li>
								<li>cosa2</li>
								<li>cosa3</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
