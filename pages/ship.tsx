/** @jsxImportSource @emotion/react */
import { CSSObject, jsx, useTheme } from '@emotion/react';
import { Animator } from '@arwes/animation';
import { Text, Figure } from '@arwes/core';

import { AppContentWrapper } from '../components/AppContentWrapper';

interface DataShip {
  id: string
  name: string
  image: string
  description: string
  url: string
}

const ship: DataShip = {
  id: 's0',
  name: 'Talon',
  image: '/assets/api/ship-esperia-talon.jpg',
  description: "This ship is a recreation of the Tevarin Talon by Esperia. The Talon is the Tevarin equivalent to the Aegis Gladius or Vanduul Blade; a single-seat combat ship. The Talon is the perfect example of the Tevarin way of building a spaceship: maneuverable with powerful, directional 'Phalanx' shields but weak physical armour, as the Tevarin way of war was to strike first and strike hard, before using their Phalanx shields to cover their escape.",
  url: 'https://robertsspaceindustries.com/pledge/ships/talon/Esperia-Talon'
};

function Ships () {
  const theme = useTheme();
  const styles: Record<string, CSSObject> = {
    content: {
      margin: theme.space(0)
    }
  };

  return (
    <main>
      <AppContentWrapper>
        <Animator animator={{ manager: 'stagger' }}>
          <header>
            <Text as='h1'>{ship.name}</Text>
          </header>
          <div css={styles.content}>
            <Figure
              src={ship.image}
            >
              {ship.description}
            </Figure>
          </div>
        </Animator>
      </AppContentWrapper>
    </main>
  );
}

export default Ships;
