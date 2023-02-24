import s from "./style.module.css";

const SearchBar = () => {
	return (
		<>
			<input
				className={s.searchBar}
				type="text"
				placeholder="Search a cocktail..."
			/>
		</>
	);
};

export default SearchBar;
