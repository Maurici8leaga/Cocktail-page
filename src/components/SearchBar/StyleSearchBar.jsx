import styled from "styled-components";

export const InputSearchBar = styled.input`
	width: 50%;
	height: 30px;
	padding: 18px 18px 18px 50px;
	border-radius: 30px;
	font-weight: 100;
	font-size: 20px;

	background-color: #d9d9d96e;
	color: white;
	border-color: transparent;

	::placeholder {
		color: white;
	}

	// mobile sizes
	@media (min-width: 320px) and (max-width: 480px) {
		width: 85%;
		font-size: 18px;
	}

	// tablet sizes
	@media (min-width: 481px) and (max-width: 778px) {
		width: 60%;
	}
`;

export const LoupeIcon = styled.span`
	position: absolute;
	margin-left: -37px;
	margin-top: 5px;

	&:hover {
		color: var(--yellow);
	}
`;
