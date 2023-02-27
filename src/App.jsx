import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Menu from "./components/Menu/Menu";
import s from "./style.module.css";

const App = () => {
	return (
		<div className={s.container_main}>
			<div className={s.bg_intro}>
				<Navbar />
				<main className="container text-center">
					<header className={s.header}>
						<p className="h3 pb-4">
							Welcome to Cocktail Pedia where you can find the recipe for your
							favorite cocktail and more
						</p>

						<SearchBar />
					</header>
				</main>
			</div>
			<section className={s.section}>
				<Menu />
				{/* <div className={s.prueba}>
					<div>
						<div className={s.imgPrueba}>
							<a className={s.subtitle_left}>Cocktail</a>
						</div>
						<div className="container-fluid py-5">
							<div className="row justify-content-center">
								<div className="col col-sm-auto col-md-auto">
									<div
										className="card"
										style={{
											borderColor: "transparent",
											borderRadius: 0,
											margin: 25,
										}}
									>
										<figure className={s.marco}>
											<img
												src="https://www.thecocktaildb.com/images/media/drink/usuvvr1472719118.jpg"
												className="card-img-top"
												alt="..."
											/>
										</figure>
										<div className="card-body text-center">
											<h5 className="card-title">Card title</h5>
										</div>
									</div>
								</div>

								<div className="col col-sm-auto col-md-auto">
									<div
										className="card"
										style={{
											borderColor: "transparent",
											borderRadius: 0,
											margin: 25,
										}}
									>
										<figure className={s.marco}>
											<img
												src="https://www.thecocktaildb.com/images/media/drink/qxrvqw1472718959.jpg"
												className="card-img-top"
												alt="..."
											/>
										</figure>
										<div className="card-body">
											<h5 className="card-title">Card title</h5>
										</div>
									</div>
								</div>

								<div className="col col-sm-auto col-md-auto">
									<div
										className="card"
										style={{
											borderColor: "transparent",
											borderRadius: 0,
											margin: 25,
										}}
									>
										<figure className={s.marco}>
											<img
												src="https://www.thecocktaildb.com/images/media/drink/uyrvut1479473214.jpg"
												className="card-img-top"
												alt="..."
											/>
										</figure>
										<div className="card-body">
											<h5 className="card-title">Card title</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}

				{/* <div className="container-fluid py-5">
					<div className="row justify-content-center">
						<div className="col col-sm-auto col-md-auto">
							<div
								className="card"
								style={{
									borderColor: "transparent",
									borderRadius: 0,
									margin: 25,
								}}
							>
								<figure className={s.marco}>
									<img
										src="https://www.thecocktaildb.com/images/media/drink/usuvvr1472719118.jpg"
										className="card-img-top"
										alt="..."
									/>
								</figure>
								<div className="card-body text-center">
									<h5 className="card-title">Card title</h5>
								</div>
							</div>
						</div>

						<div className="col col-sm-auto col-md-auto">
							<div
								className="card"
								style={{
									borderColor: "transparent",
									borderRadius: 0,
									margin: 25,
								}}
							>
								<figure className={s.marco}>
									<img
										src="https://www.thecocktaildb.com/images/media/drink/qxrvqw1472718959.jpg"
										className="card-img-top"
										alt="..."
									/>
								</figure>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
							</div>
						</div>

						<div className="col col-sm-auto col-md-auto">
							<div
								className="card"
								style={{
									borderColor: "transparent",
									borderRadius: 0,
									margin: 25,
								}}
							>
								<figure className={s.marco}>
									<img
										src="https://www.thecocktaildb.com/images/media/drink/uyrvut1479473214.jpg"
										className="card-img-top"
										alt="..."
									/>
								</figure>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</section>

			<footer></footer>
		</div>
	);
};

export default App;
