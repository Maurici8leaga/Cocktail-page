import { Search as Loupe } from "react-bootstrap-icons";
import s from "./style.module.css";

const SearchBar = ({ onSubmit }) => {
	const submitName = (e) => {
		e.preventDefault();
		if (e.target.value.trim() !== "" && e.keyCode === 13) {
			// submit name
			onSubmit(e.target.value);
			// clean the input
			e.target.value = "";
			// redirect to the section
			window.location.href = "#menu";
		}
	};

	return (
		<>
			<input
				className={s.searchBar}
				type="text"
				placeholder="Search a cocktail ..."
				name="input"
				// onKeyUp es mejor que onChange para este caso ya que con onKeyUp puedo especificar que al hacer enter este haga submit en el input
				onKeyUp={submitName}
			/>
			<Loupe className={s.loupe} />
		</>
	);
};

export default SearchBar;
