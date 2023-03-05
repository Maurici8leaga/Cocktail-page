import s from "./style.module.css";

const GridItem = (props) => {
	const { name, img, id, getDrinkById } = props;

	const selectDrink = () => {
		getDrinkById(id);
	};

	return (
		<div className="col col-sm-auto col-md-auto">
			<div
				className="card"
				style={{
					borderColor: "transparent",
					margin: 25,
					borderRadius: 6,
					background: "#ffffff",
					boxShadow: "5px 5px 10px #ebebeb, -5px -5px 10px #ffffff",
				}}
			>
				<div className={s.container_card}>
					<figure className={s.container_img} onClick={selectDrink}>
						<img src={img} className="card-img-top" alt={`${name} img`} />
					</figure>

					<div className={s.overlay}>
						<div className={s.text_overlay}>Read more ...</div>
					</div>

					<div className="card-body text-center">
						<h6 className="card-title">{name}</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GridItem;
