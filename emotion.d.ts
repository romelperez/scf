import '@emotion/react';

import { ArwesTheme } from '@arwes/core';

declare module '@emotion/react' {
  export interface Theme extends ArwesTheme {}
}
