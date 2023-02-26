import s from "./style.module.css";

const Card = () => {
	return (
		<div className="container-fluid py-5">
			<div className="row justify-content-center">
				<div className="col col-sm-auto col-md-auto">
					{/* dentro del map */}
					<div
						className="card"
						style={{
							borderColor: "transparent",
							borderRadius: 0,
							margin: 25,
						}}
					>
						<figure className={s.container_img}>
							<img
								src="https://www.thecocktaildb.com/images/media/drink/usuvvr1472719118.jpg"
								className="card-img-top"
								alt="..."
							/>
						</figure>
						<div className="card-body text-center">
							<h5 className="card-title">Card title</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
