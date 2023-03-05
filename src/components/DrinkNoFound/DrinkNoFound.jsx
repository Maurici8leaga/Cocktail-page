import s from "./style.module.css";

const DrinkNoFound = () => (
	<div className={s.bg}>
		<div className={s.title}>You can try again with other keyword</div>
		<a type="button" className="btn btn-outline-info btn-lg" href="searchBar">
			Try again
		</a>
	</div>
);

export default DrinkNoFound;
