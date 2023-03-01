import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Menu from "./components/Menu/Menu";
import Grid from "./components/Grid/Grid";
import { CocktailApi } from "./Api/endpoint";
import s from "./style.module.css";

const App = () => {
	// state for drink Category
	const [drikCategory, setDrinkCategory] = useState([]);

	// state for drink name
	const [drinkName, setDrinkName] = useState("");

	// function to get list of drink by category
	async function getListCategory() {
		const data = await CocktailApi.getListCategory();
		if (data.length > 0) {
			setDrinkCategory(data);
		}
	}

	// function to get drink by name
	async function searchDrink(name) {
		// console.log(name);
		const data = await CocktailApi.getDrinkByName(name);
		if (data) {
			setDrinkName(data);
		}
	}

	useEffect(() => {
		getListCategory();
	}, []);

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

						<SearchBar onSubmit={searchDrink} />
					</header>
				</main>
			</div>
			{/* {drikCategory.length > 0 || drinkName.length > 0 ? ( */}
			<section className={s.section}>
				{drinkName.length > 0 ? (
					<Grid drinkName={drinkName} />
				) : (
					<Menu drikCategory={drikCategory} />
				)}
			</section>
			{/* ) : (
				<div>Loadig ....</div>
			)} */}

			<footer></footer>
		</div>
	);
};

export default App;
