import styled from "styled-components";

export const ContainerMenu = styled.div`
	width: 100%;
	height: auto;
`;

export const ImageBg = styled.div`
	width: 100%;
	height: 200px;

	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const SubtitleMenu = styled.div`
	display: flex;
	position: relative;
	top: 60px;
	margin-bottom: 0px;
	font-size: 60px;
	font-family: "Prompt", sans-serif;
	text-decoration: none;
	color: white;

	// mobile sizes
	@media (min-width: 320px) and (max-width: 480px) {
		font-size: 40px;
	}

	// tablet sizes
	@media (min-width: 481px) and (max-width: 778px) {
		font-size: 50px;
	}
`;
