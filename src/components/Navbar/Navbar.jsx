import { useState } from "react";
import { List } from "react-bootstrap-icons";
import s from "./style.module.css";

const Navbar = ({ onSubmit, setDrinkDetail, setDrinkName }) => {
	// state for drink name on the navbar
	const [nameDrink, setNameDrink] = useState("");

	// functio to send the data
	const submitName = (e) => {
		e.preventDefault();
		if (nameDrink.trim() !== "") {
			// submit name
			onSubmit(nameDrink);
			// set drinkDetail value to default
			setDrinkDetail("");
		}
	};

	const onChange = (e) => {
		setNameDrink(e.target.value);
	};

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

	// function to back to the menu
	const backToMenu = () => {
		setDrinkDetail("");
		setDrinkName("");
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
							<form className="d-flex mt-3" role="search" onSubmit={submitName}>
								<input
									className="form-control me-2"
									type="search"
									name="search"
									placeholder="Search for a drink by name..."
									aria-label="Search"
									onChange={onChange}
								/>
								<button
									className="btn btn-outline-info"
									type="submit"
									data-bs-dismiss="offcanvas"
								>
									Search
								</button>
							</form>

							<ul className="navbar-nav justify-content-end flex-grow-1 pe-3 pt-3">
								<li className="nav-item pt-2 pb-2">
									<a className={s.link} href="#Beer" onClick={backToMenu}>
										Beer
									</a>
								</li>
								<li className="nav-item pt-2 pb-2">
									<a className={s.link} href="#Cocktail" onClick={backToMenu}>
										Cocktail
									</a>
								</li>
								<li className="nav-item pt-2 pb-2">
									<a className={s.link} href="#Cocoa" onClick={backToMenu}>
										Cocoa
									</a>
								</li>
								<li className="nav-item pt-2 pb-2">
									<a
										className={s.link}
										href="#Coffee / Tea"
										onClick={backToMenu}
									>
										Coffee & Tea
									</a>
								</li>
								<li className="nav-item pt-2 pb-2">
									<a
										className={s.link}
										href="#Homemade Liqueur"
										onClick={backToMenu}
									>
										Homemade Liqueur
									</a>
								</li>
								<li className="nav-item pt-2 pb-2">
									<a
										className={s.link}
										href="#Ordinary Drink"
										onClick={backToMenu}
									>
										Ordinary Drink
									</a>
								</li>
								<li className="nav-item pt-2 pb-2">
									<a
										className={s.link}
										href="#Other / Unknown"
										onClick={backToMenu}
									>
										Others
									</a>
								</li>
								<li className="nav-item pt-2 pb-2">
									<a
										className={s.link}
										href="#Punch / Party Drink"
										onClick={backToMenu}
									>
										Punch & Party Drink
									</a>
								</li>
								<li className="nav-item pt-2 pb-2">
									<a className={s.link} href="#Shake" onClick={backToMenu}>
										Shake
									</a>
								</li>
								<li className="nav-item pt-2 pb-2">
									<a className={s.link} href="#Shot" onClick={backToMenu}>
										Shot
									</a>
								</li>
								<li className="nav-item pt-2 pb-2">
									<a className={s.link} href="#Soft Drink" onClick={backToMenu}>
										Soft Drink
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
