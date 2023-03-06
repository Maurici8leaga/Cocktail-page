import s from "./style.module.css";

const Drink = ({ drinkDetail }) => {
	const {
		strAlcoholic,
		strCategory,
		strDrink,
		strDrinkThumb,
		strGlass,
		strInstructions,
	} = drinkDetail;
	console.log(drinkDetail, "esto es drikCategory");
	return (
		<div className={s.main_container}>
			<div className="container">
				<div className="d-flex flex-column ">
					<div className="d-flex justify-content-center">
						<p className={s.title}>{strDrink}</p>
					</div>

					<div className="d-flex justify-content-center">
						<figure className={s.container_img}>
							<img className="img-fluid" src={strDrinkThumb} alt="img_drink" />
						</figure>
					</div>

					<div className={s.bg}>
						<div className="row" style={{ backgroundColor: "blue" }}>
							<div
								className=" col-sm-12 col-md-6"
								style={{ backgroundColor: "red" }}
							>
								COLUMN 1<p>Category: {strCategory}</p>
								<p>Type: {strAlcoholic}</p>
							</div>
							<div
								className=" col-sm-12 col-md-6"
								style={{ backgroundColor: "green" }}
							>
								COLUMN 2<p>Glass: {strGlass}</p>
							</div>
						</div>
					</div>

					<div className="d-flex justify-content-center">
						<p>How to do it : {strInstructions}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Drink;
