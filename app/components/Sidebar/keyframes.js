import { keyframes } from 'styled-components';

export const swing = keyframes`
0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(10deg);
  }
  30% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(5deg);
  }
  70% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const sonar = keyframes`
0% {
    transform: scale(0.9);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

export const bellring = keyframes`
0% { transform: rotate(0deg); }
10% { transform: rotate(10deg); }
20% { transform: rotate(-10deg); }
30% { transform: rotate(10deg); }
40% { transform: rotate(-10deg); }
50% { transform: rotate(0deg); }
`;
