/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { jsx, Global } from '@emotion/react';

import { AppHeader } from '../AppHeader';
import { AppFooter } from '../AppFooter';

const AppContainer: FC = ({ children }) => {
  return (
    <div
      css={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Global styles={{
        body: {
          overflow: 'hidden'
        }
      }} />
      <AppHeader />
      <div
        css={{
          flex: 1,
          overflowY: 'auto'
        }}
      >
        {children}
      </div>
      <AppFooter />
    </div>
  );
};

export { AppContainer };
