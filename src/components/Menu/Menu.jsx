import { useState } from "react";
import Card from "../Card/Card";
import beers from "../../assets/images/img-menu/beers.webp";
import cocktail from "../../assets/images/img-menu/cocktails.webp";
import cocoa from "../../assets/images/img-menu/cocoa.webp";
import coffeTea from "../../assets/images/img-menu/coffee&tea.webp";
import homeMade from "../../assets/images/img-menu/homeMade.webp";
import drinks from "../../assets/images/img-menu/drinks.webp";
import others from "../../assets/images/img-menu/others.webp";
import punch from "../../assets/images/img-menu/punch.webp";
import shakes from "../../assets/images/img-menu/shakes.webp";
import shots from "../../assets/images/img-menu/shots.webp";
import softDrink from "../../assets/images/img-menu/softDrink.webp";
import { ContainerMenu, ImageBg, SubtitleMenu } from "./StyleMenu";

const Menu = ({ drikCategory, getDrinkById }) => {
	// state forr images of background's menu
	const [imgBg] = useState([
		{ img: beers },
		{ img: cocktail },
		{ img: cocoa },
		{ img: coffeTea },
		{ img: homeMade },
		{ img: drinks },
		{ img: others },
		{ img: punch },
		{ img: shakes },
		{ img: shots },
		{ img: softDrink },
	]);

	return (
		<>
			<ContainerMenu>
				{drikCategory.map((drink, i) => {
					const { strCategory } = drink;
					const oddOrEven = i % 2;
					return (
						<div key={`item_menu_${i}`}>
							<ImageBg
								style={{
									backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imgBg[i].img})`,
								}}
							>
								<SubtitleMenu
									id={strCategory}
									style={{
										justifyContent: oddOrEven === 0 ? "flex-start" : "flex-end",
										paddingLeft: oddOrEven === 0 ? 30 : 0,
										paddingRight: oddOrEven === 0 ? 0 : 30,
									}}
								>
									{`${strCategory}`}
								</SubtitleMenu>
							</ImageBg>

							<Card nameCategory={strCategory} getDrinkById={getDrinkById} />
						</div>
					);
				})}
			</ContainerMenu>
		</>
	);
};

export default Menu;
