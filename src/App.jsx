import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
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
				<div className={s.prueba}>
					<div className={s.imgPrueba}>
						<p className={s.subtitle_right}>Cocktail</p>
					</div>
				</div>

				<div className={s.container_card}>
					{/* <div className="row row-cols-1 row-cols-md-3 g-0 text-center">
						<div className="col">
							<div className="card" style={{ width: 150 }}>
								<img
									src="https://images.pexels.com/photos/1590151/pexels-photo-1590151.jpeg?auto=compress&cs=tinysrgb&w=1600https://images.pexels.com/photos/1590151/pexels-photo-1590151.jpeg?auto=compress&cs=tinysrgb&w=1600"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
							</div>
						</div>

						<div className="col">
							<div className="card" style={{ width: 150 }}>
								<img
									src="https://images.pexels.com/photos/1590151/pexels-photo-1590151.jpeg?auto=compress&cs=tinysrgb&w=1600https://images.pexels.com/photos/1590151/pexels-photo-1590151.jpeg?auto=compress&cs=tinysrgb&w=1600"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
							</div>
						</div>

						<div className="col">
							<div className="card" style={{ width: 150 }}>
								<img
									src="https://images.pexels.com/photos/1590151/pexels-photo-1590151.jpeg?auto=compress&cs=tinysrgb&w=1600https://images.pexels.com/photos/1590151/pexels-photo-1590151.jpeg?auto=compress&cs=tinysrgb&w=1600"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
								</div>
							</div>
						</div>
					</div>
					</div> */}

					<div className="card-group">
						<div className="card" style={{ width: 50 }}>
							<img
								src="https://images.pexels.com/photos/1590151/pexels-photo-1590151.jpeg?auto=compress&cs=tinysrgb&w=1600https://images.pexels.com/photos/1590151/pexels-photo-1590151.jpeg?auto=compress&cs=tinysrgb&w=1600"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer></footer>
		</div>
	);
};

export default App;
