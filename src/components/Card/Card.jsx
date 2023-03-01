import { useState, useEffect, useMemo } from "react";
import Item from "../Item/Item";
import { CocktailApi } from "../../Api/endpoint";
import s from "./style.module.css";

const Card = ({ nameCategory }) => {
	const [drinkName, setDrinkName] = useState([]);

	const getDrinkCateg = useMemo(() => {
		return async () => {
			const data = await CocktailApi.getDrinkByCateg(nameCategory);
			if (data.length > 0) {
				setDrinkName(data);
			}
		};
	}, [nameCategory]);

	useEffect(() => {
		getDrinkCateg();
	}, []);

	return drinkName.length > 0 ? (
		<div className="container-fluid py-5">
			<div className="d-flex flex-row" style={{ overflowX: "scroll" }}>
				{drinkName.map((drink) => {
					const { idDrink, strDrink, strDrinkThumb } = drink;
					return <Item key={idDrink} name={strDrink} img={strDrinkThumb} />;
				})}
			</div>
		</div>
	) : null;
};

export default Card;
