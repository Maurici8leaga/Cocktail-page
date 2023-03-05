import s from "./style.module.css";

const Item = (props) => {
	const { name, img, id, getDrinkById } = props;

	const selectDrink = () => {
		getDrinkById(id);
	};

	return (
		<div onClick={selectDrink}>
			<div
				className="card"
				style={{
					borderColor: "transparent",
					borderRadius: 0,
					margin: 25,
					cursor: "pointer",
				}}
			>
				<figure className={s.container_img}>
					<img src={img} className="card-img-top" alt={`${name} img`} />
				</figure>
				<div className="card-body text-center">
					<h5 className="card-title">{name}</h5>
				</div>
			</div>
		</div>
	);
};

export default Item;
