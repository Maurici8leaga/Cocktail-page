import axios from "axios";
import { LIST_CATEGORY_URL, BASE_URL } from "../../src/config";

export class CocktailApi {
	// get a list of drink by category
	static async getListCategory() {
		try {
			const response = await axios.get(LIST_CATEGORY_URL);
			// sorting array by name
			const arrCategory = response.data.drinks.sort((a, b) => {
				if (a.strCategory > b.strCategory) {
					return 1;
				}
				if (a.strCategory < b.strCategory) {
					return -1;
				}
				return 0;
			});

			return arrCategory;
		} catch (error) {
			console.error(error);
		}
	}

	// get a group of categories drinks
	static async getDrinkByCateg(category) {
		try {
			const response = await axios.get(`${BASE_URL}filter.php?c=${category}`);
			const data = response.data.drinks;
			return data;
		} catch (error) {
			console.error(error);
		}
	}

	// get a drink by name
	static async getDrinkByName(name) {
		try {
			const response = await axios.get(`${BASE_URL}search.php?s=${name}`);
			return response.data.drinks;
		} catch (error) {
			console.error(error);
		}
	}

	// get all details of a drink
	static async getDrinkDetail(id) {
		try {
			const response = await axios.get(`${BASE_URL}lookup.php?i=${id}`);
			return response.data.drinks[0];
		} catch (error) {
			console.error(error);
		}
	}
}
