import styled from 'styled-components';

export const Container = styled.div`
	max-width: 600px;
	margin: 0 auto 16px;
	display: flex;
	gap: 12px;
	align-items: center;
	padding: 8px;
`;

export const FilterInput = styled.input`
	flex: 1 1 auto;
	padding: 10px 12px;
	border-radius: 6px;
	border: 1px solid #e0e0e0;
	font-size: 15px;
	outline: none;

	&:focus {
		border-color: #4caf50;
		box-shadow: 0 0 6px rgba(76, 175, 80, 0.12);
	}
`;

export const FilterLabel = styled.label`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-size: 14px;
	color: #333;
`;

export const FilterCheckbox = styled.input`
	width: 18px;
	height: 18px;
	cursor: pointer;
`;

