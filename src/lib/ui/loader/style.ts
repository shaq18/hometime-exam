import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const ripple = keyframes`
 0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Ripple = styled.div`
  ${({ theme: { colors } }: any) => css`
    display: inline-block;
    position: relative;
    width: 72px;
    height: 72px;

    div {
      position: absolute;
      border: 4px solid ${colors.primary[100]};
      opacity: 1;
      border-radius: 50%;
      animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

      &:nth-child(2) {
        animation-delay: -0.5s;
      }
    }
  `}
`;

export const S = { Loader, Ripple };
