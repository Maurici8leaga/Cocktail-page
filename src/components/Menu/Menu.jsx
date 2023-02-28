import Card from "../Card/Card";
import s from "./style.module.css";

const Menu = ({ drikCategory }) => {
	return (
		<div>
			<div className={s.container_menu}>
				{drikCategory.map((drink, i) => {
					const { strCategory, img } = drink;
					const oddOrEven = i % 2;
					return (
						<div key={`item_menu_${i}`}>
							<div
								className={s.img_bg}
								style={{
									backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${
										process.env.PUBLIC_URL + `/img/${img}`
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
									{`${strCategory}`}
								</a>
							</div>

							<Card nameCategory={strCategory} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Menu;
