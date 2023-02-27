import { useState, useEffect, useMemo } from "react";
import Item from "../Item/Item";
import { CocktailApi } from "../../Api/endpoint";
import s from "./style.module.css";

const Card = ({ nameCategory }) => {
	const [drinkName, setDrinkName] = useState("");

	const getDrinkCateg = useMemo(() => {
		return async () => {
			const data = await CocktailApi.getDrinkByCateg(nameCategory);
			if (data) {
				setDrinkName(data);
			}
		};
	}, [nameCategory]);

	useEffect(() => {
		getDrinkCateg();
	}, []);

	return (
		<div className="container-fluid py-5">
			<div
				className="row justify-content-center"
				style={{ overflowX: "scroll" }}
			>
				{drinkName.map((drink) => {
					const { idDrink, strDrink, strDrinkThumb } = drink;
					return <Item key={idDrink} name={strDrink} img={strDrinkThumb} />;
				})}
			</div>
		</div>
	);
};

export default Card;
