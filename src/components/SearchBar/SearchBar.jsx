import { Search as Loupe } from "react-bootstrap-icons";
import s from "./style.module.css";

const SearchBar = ({ onSubmit }) => {
	const submitName = (e) => {
		e.preventDefault();
		if (e.target.value.trim() !== "") {
			onSubmit(e.target.value);
		}
		// const drink = e.target.value;
		// console.log(drink);
	};

	return (
		<>
			<input
				className={s.searchBar}
				type="text"
				placeholder="Search a cocktail ..."
				onChange={submitName}
				// onKeyUp={submitName}
			/>
			<Loupe className={s.loupe} />
		</>
	);
};

export default SearchBar;
