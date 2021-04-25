/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { jsx } from '@emotion/react';

const AppContentWrapper: FC = ({ children }) => {
  return (
    <div
      css={({ space }) => ({
        margin: '0 auto',
        padding: space(2),
        maxWidth: 1000
      })}
    >
      {children}
    </div>
  );
};

export { AppContentWrapper };
