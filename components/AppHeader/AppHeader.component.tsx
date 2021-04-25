/** @jsxImportSource @emotion/react */
import { FC, HTMLAttributes } from 'react';
import { jsx, useTheme } from '@emotion/react';
import Link from 'next/link';
import { WithAnimatorOutputProps } from '@arwes/animation';
import { FrameLinesProps, FrameLines, Text } from '@arwes/core';

import { createStyles } from './AppHeader.styles';

const Frame: FC<HTMLAttributes<HTMLDivElement> & FrameLinesProps<HTMLDivElement> & WithAnimatorOutputProps> = FrameLines as any;

const AppHeader: FC = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <header css={styles.root}>
      <Frame
        animator={{ manager: 'stagger' }}
        css={styles.frame}
        hideTopLines
        hideShapes
      >
        <div css={styles.container}>
          <Text as='h1' blink={false}>
            <Link href='/'>
              Star Citizen Finder
            </Link>
          </Text>
          <Text as='nav' css={styles.nav} blink={false}>
            <ul css={styles.navList}>
              <li css={styles.navItem}>
                <Link href='/planets'>Planets</Link>
              </li>
              <li css={styles.navItem}>
                <Link href='/ships'>Ships</Link>
              </li>
            </ul>
          </Text>
        </div>
      </Frame>
    </header>
  );
};

export { AppHeader };
