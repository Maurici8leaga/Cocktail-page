import styled from "styled-components";

export const ContainerBg = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 300px;
	margin: 30px 0px;
	background-color: rgb(255, 146, 51, 0.3);
`;

export const Title = styled.p`
	margin-bottom: 25px;
	font-size: 25px;

	// mobile sizes
	@media (min-width: 320px) and (max-width: 480px) {
		font-size: 18px;
	}

	// tablet sizes
	@media (min-width: 481px) and (max-width: 778px) {
		font-size: 22px;
	}
`;

export const ButtonTryAgain = styled.a`
	display: inline-block;
	padding: 0.5rem 1rem;
	text-align: center;
	font-size: 1.25rem;
	text-decoration: none;
	background-color: transparent;
	color: var(--green);
	border-radius: 0.5rem;
	border: 1.5px solid var(--green);
	cursor: pointer;

	&:hover {
		background-color: var(--green);
		color: white;
	}

	// mobile sizes
	@media (min-width: 320px) and (max-width: 480px) {
		font-size: 1rem;
	}
`;
