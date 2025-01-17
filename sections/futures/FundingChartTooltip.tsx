import { wei } from '@synthetixio/wei';
import { FC } from 'react';
import styled from 'styled-components';

import { NumericValue } from 'components/Text';
import { ETH_UNIT } from 'constants/network';
import { formatPercent } from 'sdk/utils/number';

export const parseFundingRate = (value: number) => {
	return wei(value).div(ETH_UNIT).div(24);
};

export const formatFundingRate = (value: number) => {
	const parsed = parseFundingRate(value);

	return parsed.eq(0) ? '0%' : formatPercent(parsed, { minDecimals: 4 });
};

type FundingChartTooltipProps = {
	active?: boolean;
	payload?: { value: number }[];
};

const FundingChartTooltip: FC<FundingChartTooltipProps> = ({ active, payload }) => {
	if (active && payload && payload.length) {
		const { value } = payload[0];
		const parsedValue = parseFundingRate(value);
		const percent = formatFundingRate(value);

		return (
			<FundingChartTooltipContainer>
				<NumericValue colored value={parsedValue}>
					{percent}
				</NumericValue>
			</FundingChartTooltipContainer>
		);
	}

	return null;
};

const FundingChartTooltipContainer = styled.div`
	padding: 10px;
	border-radius: 8px;
	border: 1px solid
		${(props) => props.theme.colors.selectedTheme.newTheme.fundingChart.tooltip.border};
	background-color: ${(props) =>
		props.theme.colors.selectedTheme.newTheme.fundingChart.tooltip.background};
`;

export default FundingChartTooltip;
