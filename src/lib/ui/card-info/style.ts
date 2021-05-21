import { css } from '@emotion/react';
import styled from '@emotion/styled';

const CardArtist = styled.p`
  max-width: 20ch;
`;

const CardContainer = styled.div`
  height: 25rem;
  margin-left: -8rem;

  img {
    height: 100%;
  }
`;

const CardInfoContainer = styled.div`
  ${({ theme: { colors } }: any) => css`
    position: relative;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 4rem;
    padding: 3rem;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${colors.bg[100]};
    border-radius: 1.5rem;
    transition: background-color 0.3s ease-out;
  `}
`;

const CardImagePlaceholder = styled.div`
  height: 25rem;
  margin-left: -8rem;
  background-color: #dfdfe6;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  width: 287.743px;
`;

const CardName = styled.h1`
  max-width: 12ch;
`;

const CardDescription = styled.div`
  grid-template-rows: auto 1fr;
`;

const CardDetails = styled.div`
  grid-template-rows: auto auto 1fr auto;
  grid-gap: 1.5rem;
`;

const ManaCost = styled.div`
  ${({ theme: { colors } }: any) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border: 2px solid ${colors.text[100]};
    border-radius: 999px;
    transition: border-color 0.3s ease-out;
  `}
`;

const ManaCostNumber = styled.p`
  transform: translateY(2px);
  margin-right: 0.5rem;
  line-height: 1;
`;

const PowerContainer = styled.div`
  ${({ theme: { colors } }: any) => css`
    padding: 16px 16px 12px 16px;
    border-radius: 0.5rem;
    border: 2px solid ${colors.text[100]};
    transition: border-color 0.3s ease-out;
  `}
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextFrame = styled.div`
  ${({ theme: { colors } }: any) => css`
    position: relative;
    padding: 18px 18px 14px 18px;
    background-color: ${colors.frameBorder[100]};
    border-radius: 0.5rem;
    border: 2px solid ${colors.frameBorder[200]};
    overflow: hidden;
    transition: border-color 0.3s ease-out, background-color 0.3s ease-out;

    p {
      position: relative;
      z-index: 1;
    }

    &::after {
      content: '';
      position: absolute;
      top: 3px;
      right: 3px;
      bottom: 3px;
      left: 3px;
      border: 2px solid ${colors.frameBorder[200]};
      border-radius: 6px;
      background-color: ${colors.bg[100]};
      transition: border-color 0.3s ease-out, background-color 0.3s ease-out;
    }
  `}
`;

export const S = {
  CardArtist,
  CardInfoContainer,
  CardImagePlaceholder,
  CardContainer,
  CardDescription,
  CardDetails,
  CardName,
  ManaCost,
  ManaCostNumber,
  PowerContainer,
  TopInfo,
  BottomInfo,
  TextFrame,
};
