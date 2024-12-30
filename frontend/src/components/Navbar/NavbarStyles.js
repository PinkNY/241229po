import { css } from '@emotion/react';

export const navbar = css`
  width: 250px;
  height: 100vh;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed; /* 고정 위치 */
  left: 0; /* 좌측 고정 */
`;

export const navItem = css`
  margin: 15px 0;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    color: #61dafb;
    font-weight: bold;
  }
`;

