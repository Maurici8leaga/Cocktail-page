import { Search as Loupe } from "react-bootstrap-icons";
import s from "./style.module.css";

const SearchBar = () => {
	return (
		<>
			<input
				className={s.searchBar}
				type="text"
				placeholder="Search a cocktail ..."
			/>
			<Loupe className={s.loupe} />
		</>
	);
};

export default SearchBar;
