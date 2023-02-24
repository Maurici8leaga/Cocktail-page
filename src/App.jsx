import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import s from "./style.module.css";

const App = () => {
	return (
		<div className={s.container_main}>
			{/* <div className=""> */}
			<div className={s.bg_intro}>
				<Navbar />
				<main className="container text-center">
					<header className={s.header}>
						<h1 className={s.title}>Cocktail Pedia</h1>

						<p className="h4">
							Welcome to Cocktail Pedia, where you can find the recipe for your
							favorite cocktail and more
						</p>
					</header>
					<SearchBar />
				</main>
			</div>
			{/* </div> */}
		</div>
	);
};

export default App;
