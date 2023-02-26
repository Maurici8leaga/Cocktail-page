import { useState, useEffect } from "react";
import { CocktailApi } from "../../Api/endpoint";
import s from "./style.module.css";
import img from "../../assets/images/cocktails.webp";

const Menu = () => {
	const [drikCategory, setDrinkCategory] = useState([]);

	async function getListCategory() {
		const data = await CocktailApi.getListCategory();
		if (data.length > 0) {
			setDrinkCategory(data);
		}
	}

	useEffect(() => {
		getListCategory();
	}, []);

	return (
		<div>
			<div className={s.container_menu}>
				{drikCategory.map((drink, i) => {
					const oddOrEven = i % 2;
					return (
						<div
							className={s.img_bg}
							key={`item_menu_${i}`}
							style={{
								backgroundImage: `url(${
									process.env.PUBLIC_URL + "/img/cocktails.webp"
								})`,
							}}
						>
							<a
								className={s.subtitle_menu}
								href="/"
								style={{
									justifyContent: oddOrEven === 0 ? "flex-start" : "flex-end",
									paddingLeft: oddOrEven === 0 ? 30 : 0,
									paddingRight: oddOrEven === 0 ? 0 : 30,
								}}
							>
								{`${drink.strCategory}`}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Menu;
