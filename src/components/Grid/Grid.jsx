import GridItem from "../GridItem/GridItem";
import DrinkNoFound from "../DrinkNoFound/DrinkNoFound";
import s from "./style.module.css";

const Grid = ({ drinkName, getDrinkById }) => {
	if (drinkName.length > 0) {
		// this for the page load at the top
		window.location.href = "#list";
	}

	console.log(drinkName, "drinkName en grid");

	return drinkName.length > 0 ? (
		<div className="container-fluid py-5">
			<div className="row justify-content-center">
				<div className={s.container_title}>
					<p className={s.title}>
						We have found {drinkName.length} drinks with that name
					</p>
				</div>
				{drinkName.map((drink) => {
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
	) : (
		<div className="container-fluid py-5">
			<div className="row justify-content-center">
				<div className={s.container_title}>
					<p className={s.title}>We have not found any drink with that name</p>
				</div>
				<DrinkNoFound />
			</div>
		</div>
	);
};

export default Grid;
