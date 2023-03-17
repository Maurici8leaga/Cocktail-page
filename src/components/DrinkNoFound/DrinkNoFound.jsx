import { ContainerBg, Title, ButtonTryAgain } from "./StyledDrinkNoFound";

const DrinkNoFound = () => (
	<div>
		<ContainerBg>
			<Title>You can try again with other keyword</Title>
			<ButtonTryAgain type="button" href="searchBar">
				Try again
			</ButtonTryAgain>
		</ContainerBg>
	</div>
);

export default DrinkNoFound;
