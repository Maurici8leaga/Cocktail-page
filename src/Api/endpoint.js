import axios from "axios";
import { LIST_CATEGORY_URL, BASE_URL } from "../../src/config";
import { img_bg_menu } from "../Api/data";

export class CocktailApi {
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

			const data = arrCategory.map((ctg, i) => {
				return { ...ctg, img: img_bg_menu[i].img };
			});

			return data;
		} catch (error) {
			console.error(error);
		}
	}

	static async getDrinkByCateg(category) {
		try {
			const response = await axios.get(`${BASE_URL}filter.php?c=${category}`);
			// reducing the array to only 3 of them
			const data = response.data.drinks.slice(0, 3);
			return data;
		} catch (error) {
			console.error(error);
		}
	}
}
