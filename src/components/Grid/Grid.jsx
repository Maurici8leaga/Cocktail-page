import GridItem from "../GridItem/GridItem";
import s from "./style.module.css";

const Grid = ({ drinkName }) => {
	console.log(drinkName, "esto es drinkName en grid");
	return (
		<div className="container-fluid py-5">
			<div className="row justify-content-center">
				<p>Those are the drink founded: </p>
				{drinkName.map((drink) => {
					const { idDrink, strDrink, strDrinkThumb } = drink;
					return <GridItem key={idDrink} name={strDrink} img={strDrinkThumb} />;
				})}
			</div>
		</div>
	);
};

export default Grid;
