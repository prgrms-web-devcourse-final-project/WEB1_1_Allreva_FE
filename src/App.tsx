/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import useScreenSize from './hook/useScreenSize';

const router = createBrowserRouter([]);

function App() {
  useScreenSize();

  return (
    <div css={mobileWrapperStyle}>
      <RouterProvider router={router} />
    </div>
  );
}

const mobileWrapperStyle = css`
  width: 100%;
  max-width: 430px;
  height: calc(var(--vh, 1vh) * 100);
  margin: auto;
  position: relative;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: pink;
`;

export default App;
