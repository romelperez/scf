/** @jsxImportSource @emotion/react */
import { FC, HTMLAttributes } from 'react';
import { jsx } from '@emotion/react';
import { WithAnimatorOutputProps } from '@arwes/animation';
import { FrameLinesProps, FrameLines, Text } from '@arwes/core';

const Frame: FC<HTMLAttributes<HTMLDivElement> & FrameLinesProps<HTMLDivElement> & WithAnimatorOutputProps> = FrameLines as any;

const AppFooter: FC = () => {
  return (
    <header
      css={({ space }) => ({
        padding: space(2),
        userSelect: 'none',

        p: {
          margin: 0
        }
      })}
    >
      <Frame
        animator={{ manager: 'stagger' }}
        style={{
          display: 'block'
        }}
        hideBottomLines
        hideShapes
      >
        <div css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text as='p'>
            <a href='https://romelperez.dev' target='romelperez' referrerPolicy='no-referrer'>
              &copy; Romel Pérez
            </a>
          </Text>
          <Text as='p'>
            <a href='https://robertsspaceindustries.com' target='rsi' referrerPolicy='no-referrer'>
              &copy; Cloud Imperium Rights
            </a>
          </Text>
        </div>
      </Frame>
    </header>
  );
};

export { AppFooter };
