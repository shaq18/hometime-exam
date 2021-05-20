import { css } from '@emotion/react';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  max-height: 25rem;
  margin-left: -8rem;
`;

const CardInfoContainer = styled.div`
  ${({ theme: { colors } }: any) => css`
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 4rem;
    padding: 3rem;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${colors.bg[100]};
    border-radius: 1.5rem;
  `}
`;

const ManaCost = styled.div`
  ${({ theme: { colors } }: any) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background-color: ${colors.bg[200]};
    border-radius: 999px;
  `}
`;

const ManaCostNumber = styled.p`
  transform: translateY(2px);
  margin-right: 0.5rem;
  line-height: 1;
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const S = { CardInfoContainer, CardContainer, ManaCost, ManaCostNumber, TopInfo };
