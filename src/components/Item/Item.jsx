import s from "./style.module.css";

const Item = ({ name, img }) => (
	<div className="col col-sm-auto col-md-auto">
		<div
			className="card"
			style={{
				borderColor: "transparent",
				borderRadius: 0,
				margin: 25,
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

export default Item;
