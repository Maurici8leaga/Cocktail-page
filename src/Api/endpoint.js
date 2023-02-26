import axios from "axios";
import { LIST_CATEGORY_URL } from "../../src/config";

export class CocktailApi {
	static async getListCategory() {
		try {
			const response = await axios.get(LIST_CATEGORY_URL);
			// sorting array by name
			const data = response.data.drinks.sort((a, b) => {
				if (a.strCategory > b.strCategory) {
					return 1;
				}
				if (a.strCategory < b.strCategory) {
					return -1;
				}
				return 0;
			});
			return data;
		} catch (error) {
			console.error(error);
		}
	}
}
