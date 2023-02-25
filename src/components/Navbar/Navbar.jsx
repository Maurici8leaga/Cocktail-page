import s from "./style.module.css";
import { List } from "react-bootstrap-icons";

const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-transparent fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					<p className={s.logo}>Cocktail Pedia</p>
					{/* Cocktail Pedia */}
				</a>

				{/* <button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar"
				>
					<span className="navbar-toggler-icon"></span>
				</button> */}

				<button
					className={s.bt_menu}
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar"
				>
					<List size={30} className={s.listIcon} />
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
								BEER LIST
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
