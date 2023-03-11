import s from "./style.module.css";

const Footer = ({ setDrinkDetail, setDrinkName }) => {
	// function to back to the menu
	const backToMenu = () => {
		setDrinkDetail("");
		setDrinkName("");
	};

	return (
		<footer>
			<div className={s.bg_footer}>
				<div className="container">
					<div className="d-flex flex-column mt-5 mb-5">
						<div className="d-flex justify-content-center mt-3 mb-3">
							<h5 className={s.logo_title}>Cocktail Pedia</h5>
						</div>
						<div
							className="row text-center mt-3 mb-3 "
							style={{ borderBottom: "1px solid #ffcd3c" }}
						>
							<div className="col-12 col-md-1 mt-2 mb-2 mx-auto">
								<a className={s.link} href="#Beer" onClick={backToMenu}>
									Beer
								</a>
							</div>
							<div className="col-12 col-md-1 mt-2 mb-2 mx-auto">
								<a className={s.link} href="#Cocktail" onClick={backToMenu}>
									Cocktail
								</a>
							</div>
							<div className="col-12 col-md-1 mt-2 mb-2 mx-auto">
								<a className={s.link} href="#Cocoa" onClick={backToMenu}>
									Cocoa
								</a>
							</div>
							<div className="col-12 col-md-1 mt-2 mb-2 mx-auto">
								<a className={s.link} href="#Coffee / Tea" onClick={backToMenu}>
									C&T
								</a>
							</div>
							<div className="col-12 col-md-1 mt-2 mb-2 mx-auto">
								<a
									className={s.link}
									href="#Homemade Liqueur"
									onClick={backToMenu}
								>
									Homd Liq
								</a>
							</div>
							<div className="col-12 col-md-1 mt-2 mb-2 mx-auto">
								<a
									className={s.link}
									href="#Ordinary Drink"
									onClick={backToMenu}
								>
									Reg Dr
								</a>
							</div>
							<div className="col-12 col-md-1 mt-2 mb-2 mx-auto">
								<a
									className={s.link}
									href="#Other / Unknown"
									onClick={backToMenu}
								>
									Others
								</a>
							</div>
							<div className="col-12 col-md-1 mt-2 mb-2 mx-auto">
								<a
									className={s.link}
									href="#Punch / Party Drink"
									onClick={backToMenu}
								>
									Punch
								</a>
							</div>
							<div
								className="col-12 col-md-1 mt-2 mb-2 mx-auto"
								onClick={backToMenu}
							>
								<a className={s.link} href="#Shake">
									Shake
								</a>
							</div>
							<div
								className="col-12 col-md-1 mt-2 mb-2 mx-auto"
								onClick={backToMenu}
							>
								<a className={s.link} href="#Shot">
									Shot
								</a>
							</div>
							<div
								className="col-12 col-md-1 mt-2 mb-2 mx-auto"
								onClick={backToMenu}
							>
								<a className={s.link} href="#Soft Drink">
									Soft Dr
								</a>
							</div>
						</div>
						<div className="d-flex justify-content-center mt-3 mb-3">
							<p className={s.rights}>
								&copy;Cocktail Pedia 2023. All Rights Reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
