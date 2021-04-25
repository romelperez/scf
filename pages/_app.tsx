import lighten from 'polished/lib/color/lighten';
import Head from 'next/head';
import { AnimatorGeneralProvider } from '@arwes/animation';
import { BleepsProvider, BleepsProviderProps } from '@arwes/sounds';
import { ArwesThemeProvider, ArwesThemeProviderProps, StylesBaseline } from '@arwes/core';

import { AppContainer } from '../components/AppContainer';

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';

const PALETTE_PRIMARY = '#62bffd';
const PALETTE_SECONDARY = '#b1d8f1';
const PALETTE_TEXT = '#a0c8e2';
const PALETTE_NEUTRAL = '#030f18';

const SOUND_OBJECT_URL = '/assets/sounds/object.mp3';
const SOUND_ASSEMBLE_URL = '/assets/sounds/assemble.mp3';
const SOUND_TYPE_URL = '/assets/sounds/type.mp3';
const SOUND_CLICK_URL = '/assets/sounds/click.mp3';

const themeProviderProps: ArwesThemeProviderProps = {
  themeSettings: {
    palette: {
      primary: { main: PALETTE_PRIMARY },
      secondary: { main: PALETTE_SECONDARY },
      text: {
        root: PALETTE_TEXT,
        headings: PALETTE_SECONDARY,
        link: lighten(0.1, PALETTE_SECONDARY),
        linkHover: lighten(0.2, PALETTE_SECONDARY)
      },
      neutral: { main: PALETTE_NEUTRAL }
    }
  }
};

const globalStyles = {
  'html, body': {
    fontFamily: FONT_FAMILY_ROOT
  }
};

const generalAnimator = {
  duration: {
    enter: 200,
    exit: 200,
    stagger: 50
  }
};

const bleepsProviderProps: BleepsProviderProps = {
  audioSettings: {
    common: {
      volume: 0.4
    },
    categories: {
      interaction: {
        volume: 0.3
      }
    }
  },
  playersSettings: {
    object: { src: [SOUND_OBJECT_URL] },
    assemble: { src: [SOUND_ASSEMBLE_URL], loop: true },
    type: { src: [SOUND_TYPE_URL], loop: true },
    click: { src: [SOUND_CLICK_URL] }
  },
  bleepsSettings: {
    object: { player: 'object' },
    assemble: { player: 'assemble' },
    type: { player: 'type' },
    click: { player: 'click' }
  }
};

function StarCitizenFinderApp ({ Component, pageProps }) {
  return (
    <ArwesThemeProvider {...themeProviderProps}>
      <Head>
        <title>Star Citizen Finder</title>
        <link rel='icon' href='/favicon.png' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&display=swap' />
      </Head>
      <StylesBaseline styles={globalStyles} />
      <AnimatorGeneralProvider animator={generalAnimator}>
        <BleepsProvider {...bleepsProviderProps}>
          <AppContainer>
            <Component {...pageProps} />
          </AppContainer>
        </BleepsProvider>
      </AnimatorGeneralProvider>
    </ArwesThemeProvider>
  );
}

export default StarCitizenFinderApp;
