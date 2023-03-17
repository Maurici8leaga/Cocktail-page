import { useState, useEffect, useMemo, useCallback } from "react";
import Item from "../Item/Item";
import { CocktailApi } from "../../Api/endpoint";

const Card = ({ nameCategory, getDrinkById }) => {
	// state for drink names
	const [drinkName, setDrinkName] = useState([]);

	// function to get drik by categories
	const getDrinkCateg = useCallback(async () => {
		const data = await CocktailApi.getDrinkByCateg(nameCategory);
		if (data.length > 0) {
			setDrinkName(data);
		}
	}, [nameCategory]);

	useEffect(() => {
		getDrinkCateg();
	}, [getDrinkCateg]);

	// using memo to memoizig the array of items
	const content = useMemo(() => {
		return drinkName.map((drink) => {
			const { idDrink, strDrink, strDrinkThumb } = drink;

			return (
				<Item
					key={idDrink}
					name={strDrink}
					img={strDrinkThumb}
					id={idDrink}
					getDrinkById={getDrinkById}
				/>
			);
		});
	}, [drinkName, getDrinkById]);

	return drinkName.length > 0 ? (
		<div className="container-fluid py-5">
			<div className="d-flex flex-row" style={{ overflowX: "scroll" }}>
				{content}
			</div>
		</div>
	) : null;
};

export default Card;
