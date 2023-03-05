import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Menu from "./components/Menu/Menu";
import Grid from "./components/Grid/Grid";
import Drink from "./components/Drink/Drink";
import { CocktailApi } from "./Api/endpoint";
import s from "./style.module.css";

const App = () => {
	// state for drink Category
	const [drikCategory, setDrinkCategory] = useState([]);

	// state for drink name
	const [drinkName, setDrinkName] = useState("");

	const [drinkDetail, setDrinkDetail] = useState("");

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
		} else {
			setDrinkName([]);
		}
	}

	// function to get drink by id
	async function getDrinkById(id) {
		const data = await CocktailApi.getDrinkDetail(id);
		console.log(data, "esto es drink");
		if (data) {
			setDrinkDetail(data);
		}
	}

	useEffect(() => {
		getListCategory();
	}, []);

	// console.log(drikCategory.length, "este es drikCategory");
	console.log(drinkName.length, "este es drinkName");
	console.log(drinkDetail, "este es drinkDetail");
	// console.log(drinkName.length === 0, "es o no?");
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

						<SearchBar onSubmit={searchDrink} id="searchBar" />
					</header>
				</main>
			</div>

			<section
				className={s.section}
				style={{
					display: drinkName.length === 0 && !drinkDetail ? "block" : "none",
				}}
			>
				<Menu drikCategory={drikCategory} getDrinkById={getDrinkById} />
			</section>
			<section
				id="menu"
				className={s.section}
				style={{
					display: drinkName.length > 0 && !drinkDetail ? "block" : "none",
				}}
			>
				<Grid drinkName={drinkName} getDrinkById={getDrinkById} />
			</section>
			<section
				className={s.section}
				style={{ display: drinkDetail ? "block" : "none" }}
			>
				<Drink drinkDetail={drinkDetail} />
			</section>
			{/* ) : (
				<div>Loadig ....</div>
			)} */}
			<footer></footer>
		</div>
	);
};

export default App;
