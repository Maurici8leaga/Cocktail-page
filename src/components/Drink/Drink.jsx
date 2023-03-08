import { useState, useCallback, useEffect } from "react";
import GridItem from "../GridItem/GridItem";
import { CocktailApi } from "../../Api/endpoint";
import s from "./style.module.css";

const Drink = ({ drinkDetail, getDrinkById }) => {
	const {
		strAlcoholic,
		strCategory,
		strDrink,
		strDrinkThumb,
		strGlass,
		strInstructions,
		strIngredient1,
		strIngredient2,
		strIngredient3,
		strIngredient4,
		strIngredient5,
		strIngredient6,
		strIngredient7,
		strIngredient8,
		strIngredient9,
		strIngredient10,
		strIngredient11,
		strIngredient12,
		strIngredient13,
		strIngredient14,
		strIngredient15,
		strMeasure1,
		strMeasure2,
		strMeasure3,
		strMeasure4,
		strMeasure5,
		strMeasure6,
		strMeasure7,
		strMeasure8,
		strMeasure9,
		strMeasure10,
		strMeasure11,
		strMeasure12,
		strMeasure13,
		strMeasure14,
		strMeasure15,
	} = drinkDetail;

	// state for drink suggested
	const [drinkSuggest, setDrinkSuggest] = useState([]);

	const getSuggestion = useCallback(async () => {
		const data = await CocktailApi.getDrinkByCateg(strCategory);
		if (data.length > 0) {
			// cutting the array for only 3 drinks of them
			const arrayOfDrink = data.slice(0, 3);
			setDrinkSuggest(arrayOfDrink);
		}
	}, [strCategory]);

	useEffect(() => {
		if (drinkDetail) {
			// this for the page load at the top
			window.location.href = "#drinkDetail";
			getSuggestion();
		}
	}, [drinkDetail]);

	return (
		<div id="drinkDetail" className={s.main_container}>
			<div className="container">
				<div className="d-flex flex-column ">
					<div className="d-flex justify-content-center">
						<p className={s.name}>{strDrink}</p>
					</div>

					<div className="d-flex justify-content-center">
						<figure className={s.container_img}>
							<img className="img-fluid" src={strDrinkThumb} alt="img_drink" />
						</figure>
					</div>

					<div className={s.bg}>
						<div
							className="row g-2"
							style={{ backgroundColor: "rgb(255, 146, 51, 0.3)" }}
						>
							<div
								className="d-flex flex-row justify-content-evenly"
								style={{ borderBottom: "1px solid gray" }}
							>
								<div className={s.text}>
									<b>Category:</b> {strCategory}
								</div>
								<div className={s.text}>
									<b>Glass:</b> {strGlass}
								</div>
								<div className={s.text}>
									<b>Type:</b> {strAlcoholic}
								</div>
							</div>

							<div
								className="col-6 text-center mt-2 mb-2"
								style={{ borderRight: "1px solid gray" }}
							>
								<h5 className={s.title}>INGREDIENTS</h5>
								<p>
									{strMeasure1} {strIngredient1}
								</p>
								<p>
									{strMeasure2} {strIngredient2}
								</p>
								<p>
									{strMeasure3} {strIngredient3}
								</p>
								<p>
									{strMeasure4} {strIngredient4}
								</p>
								<p>
									{strMeasure5} {strIngredient5}
								</p>
								<p>
									{strMeasure6} {strIngredient6}
								</p>
								<p>
									{strMeasure7} {strIngredient7}
								</p>
								<p>
									{strMeasure8} {strIngredient8}
								</p>
								<p>
									{strMeasure9} {strIngredient9}
								</p>
								<p>
									{strMeasure10} {strIngredient10}
								</p>
								<p>
									{strMeasure11} {strIngredient11}
								</p>
								<p>
									{strMeasure12} {strIngredient12}
								</p>
								<p>
									{strMeasure13} {strIngredient13}
								</p>
								<p>
									{strMeasure14} {strIngredient14}
								</p>
								<p>
									{strMeasure15} {strIngredient15}
								</p>
							</div>

							<div className="col-6 mt-2 mb-2">
								<h5 className={s.title}>INSTRUCCIONS</h5>
								<p className="p-3">{strInstructions}</p>
							</div>
						</div>
					</div>

					<div className={s.container_suggest}>
						<div className="d-flex justify-content-center">
							<p className={s.name}>You may also like</p>
						</div>

						<div className="row justify-content-center mt-2 mb-4">
							{drinkSuggest.map((drink) => {
								const { idDrink, strDrink, strDrinkThumb } = drink;
								return (
									<GridItem
										key={idDrink}
										name={strDrink}
										img={strDrinkThumb}
										id={idDrink}
										getDrinkById={getDrinkById}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Drink;
