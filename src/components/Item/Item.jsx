import s from "./style.module.css";

const Item = (props) => {
	const { name, img, id, getDrinkById } = props;

	// function to select a drink and get the id
	const selectDrink = () => {
		getDrinkById(id);
	};

	// function to check the length of the name
	const lengthName = () => {
		const shortName = name.substr(0, 21);
		if (name.length > 21) {
			return `${shortName}...`;
		} else {
			return name;
		}
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
					<h5 className="card-title">{lengthName()}</h5>
				</div>
			</div>
		</div>
	);
};

export default Item;
