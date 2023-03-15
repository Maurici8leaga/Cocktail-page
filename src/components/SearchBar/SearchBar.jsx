import { Search as Loupe } from "react-bootstrap-icons";
import { InputSearchBar, LoupeIcon } from "./StyleSearchBar";

const SearchBar = ({ onSubmit, setDrinkDetail }) => {
	const submitName = (e) => {
		e.preventDefault();
		if (e.target.value.trim() !== "" && e.keyCode === 13) {
			// submit name
			onSubmit(e.target.value);
			// clean the input
			e.target.value = "";
			// set drinkDetail value to default
			setDrinkDetail("");
		}
	};

	return (
		<>
			<InputSearchBar
				type="text"
				placeholder="Search a cocktail ..."
				name="input"
				onKeyUp={submitName}
			/>

			<LoupeIcon>
				<Loupe />
			</LoupeIcon>
		</>
	);
};

export default SearchBar;
