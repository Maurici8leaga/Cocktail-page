import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Menu from "./components/Menu/Menu";
import Grid from "./components/Grid/Grid";
import Drink from "./components/Drink/Drink";
import Footer from "./components/Footer/Footer";
import Spinner from "./components/Spinner/Spinner";
import { CocktailApi } from "./Api/endpoint";
import limonTable from "./assets/images/limon-table.webp";
import s from "./style.module.css";

const App = () => {
	// state for drink Category
	const [drikCategory, setDrinkCategory] = useState([]);

	// state for drink name
	const [drinkName, setDrinkName] = useState("");

	// state for drink details
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
		if (data) {
			setDrinkDetail(data);
		}
	}

	useEffect(() => {
		getListCategory();
	}, []);

	return drikCategory.length > 0 ? (
		<div className={s.container_main}>
			<Navbar
				onSubmit={searchDrink}
				setDrinkDetail={setDrinkDetail}
				setDrinkName={setDrinkName}
			/>

			<div className={s.container_info}>
				<div
					className={s.bg_intro}
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${limonTable})`,
					}}
				>
					<main className="container text-center">
						<header className={s.header}>
							<p className="h3 pb-4">
								Welcome to Cocktail Pedia where you can find the recipe for your
								favorite cocktail and more
							</p>

							<SearchBar
								id="searchBar"
								onSubmit={searchDrink}
								setDrinkDetail={setDrinkDetail}
							/>
						</header>
					</main>
				</div>

				<section
					className={s.section}
					style={{
						display: !drinkName && !drinkDetail ? "block" : "none",
					}}
				>
					<Menu drikCategory={drikCategory} getDrinkById={getDrinkById} />
				</section>

				<section
					id="list"
					className={s.section}
					style={{
						display: drinkName && !drinkDetail ? "block" : "none",
					}}
				>
					<Grid drinkName={drinkName} getDrinkById={getDrinkById} />
				</section>

				<section
					className={s.section}
					style={{ display: drinkDetail ? "block" : "none" }}
				>
					<Drink drinkDetail={drinkDetail} getDrinkById={getDrinkById} />
				</section>
			</div>

			<footer>
				<Footer setDrinkDetail={setDrinkDetail} setDrinkName={setDrinkName} />
			</footer>
		</div>
	) : (
		<Spinner />
	);
};

export default App;
