import Card from "../Card/Card";
import { ContainerMenu, ImageBg, SubtitleMenu } from "./StyleMenu";

const Menu = ({ drikCategory, getDrinkById }) => {
	return (
		<>
			<ContainerMenu>
				{drikCategory.map((drink, i) => {
					const { strCategory, img } = drink;
					const oddOrEven = i % 2;
					return (
						<div key={`item_menu_${i}`}>
							<ImageBg
								style={{
									backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${
										process.env.PUBLIC_URL + `/img/${img}`
									})`,
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
