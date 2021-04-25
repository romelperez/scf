import { CSSObject } from '@emotion/react';
import { ArwesTheme } from '@arwes/core';

const createStyles = ({ space }: ArwesTheme): Record<string, CSSObject> => ({
  root: {
    padding: space(2),
    userSelect: 'none',

    h1: {
      margin: 0,
      lineHeight: 1
    }
  },
  frame: {
    display: 'block',
    padding: `${space(2)}px 0 ${space(2)}px ${space(2)}px`
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nav: {
    display: 'block'
  },
  navList: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  navItem: {
    display: 'block',

    a: {
      display: 'inline-block',
      padding: `0 ${space(2)}px`,
      fontSize: '1.2rem',
      lineHeight: 1
    }
  }
});

export { createStyles };
