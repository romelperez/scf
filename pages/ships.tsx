/** @jsxImportSource @emotion/react */
import { CSSObject, jsx, useTheme } from '@emotion/react';
import Link from 'next/link';
import { Animator } from '@arwes/animation';
import { Card, Button, Text } from '@arwes/core';

import { AppContentWrapper } from '../components/AppContentWrapper';

interface DataShip {
  id: string
  name: string
  image: string
  description: string
  url: string
}

const ships: DataShip[] = [
  {
    id: 's0',
    name: 'Talon',
    image: '/assets/api/ship-esperia-talon.jpg',
    description: "This ship is a recreation of the Tevarin Talon by Esperia. The Talon is the Tevarin equivalent to the Aegis Gladius or Vanduul Blade; a single-seat combat ship. The Talon is the perfect example of the Tevarin way of building a spaceship: maneuverable with powerful, directional 'Phalanx' shields but weak physical armour, as the Tevarin way of war was to strike first and strike hard, before using their Phalanx shields to cover their escape.",
    url: 'https://robertsspaceindustries.com/pledge/ships/talon/Esperia-Talon'
  },
  {
    id: 's1',
    name: 'Gladius',
    image: '/assets/api/ship-aegis-gladius.jpg',
    description: 'The Gladius is an older design which has been updated over the years to keep up with modern technology. In military circles, the Gladius is beloved for its performance and its simplicity. A fast, light fighter with a laser-focus on dogfighting, the Gladius is an ideal interceptor or escort ship.',
    url: 'https://robertsspaceindustries.com/pledge/ships/gladius/Gladius'
  },
  {
    id: 's2',
    name: 'Terrapin',
    image: '/assets/api/ship-anvil-terrapin.jpg',
    description: 'Presenting the Anvil Aerospace U4A-3 Terrapin-class Scanning/Exploration Ship. The Terrapin was developed near the end of the 28th century to serve as the first ship in the Empire’s defensive restructuring of the Navy.',
    url: 'https://robertsspaceindustries.com/pledge/ships/terrapin/Terrapin'
  },
  {
    id: 's3',
    name: 'The Buccaneer',
    image: '/assets/api/ship-drake-buccaneer.jpg',
    description: 'The Buccaneer has been designed from the ground up to fly and fight the way you live. No leather interiors or hyperpillows here: the ‘Bucc is a scrapper designed to maneuver and fight above its weight class. This rough-and-tumble frontier fighter can be maintained in the worst of conditions in order to keep real, working space crews alive.',
    url: 'https://robertsspaceindustries.com/pledge/ships/drake-buccaneer/Buccaneer'
  },
  {
    id: 's4',
    name: 'Hawk',
    image: '/assets/api/ship-anvil-hawk.jpg',
    description: 'A small, light fighter with an emphasis on weaponry, the Hawk boasts an impressive arsenal of lethal and non-lethal weapons, making it a perfect ship for independent bounty hunters or local security looking for a little more punch.',
    url: 'https://robertsspaceindustries.com/pledge/ships/hawk/Hawk'
  },
  {
    id: 's5',
    name: 'The Khartu-Al',
    image: '/assets/api/ship-aopoa-khartual.jpg',
    description: "The Xi'an Aopoa corporation manufactures an export model of the Qhire Khartu, the Khartu-al, for sale to Human civilians. The export model features the same Xi'an maneuvering rig, but control surfaces modified for Human use and a more limited armament.",
    url: 'https://robertsspaceindustries.com/pledge/ships/khartu/Khartu-Al'
  },
  {
    id: 's6',
    name: 'Eclipse',
    image: '/assets/api/ship-aegis-eclipse.jpg',
    description: "The Aegis Eclipse is a bomber designed to get in and strike before it's even spotted. After extensive service with the UEE, this high-tech military stalwart is making its debut on the civilian market for 2947.",
    url: 'https://robertsspaceindustries.com/pledge/ships/eclipse/Eclipse'
  }
];

function Ships () {
  const theme = useTheme();
  const styles: Record<string, CSSObject> = {
    cards: {
      display: 'flex',
      flexDirection: 'column'
    },
    card: {
      marginBottom: theme.space(4)
    }
  };

  return (
    <main>
      <AppContentWrapper>
        <Animator animator={{ manager: 'stagger' }}>
          <header>
            <Text as='h1'>Ships</Text>
          </header>
          <div css={styles.cards}>
            {ships.map(ship =>
              <Card
                key={ship.id}
                css={styles.card}
                landscape
                title={ship.name}
                image={{
                  src: ship.image
                }}
                options={
                  <>
                    <Link href='/ship'>
                      <Button palette='secondary'>
                        <Text>See Details</Text>
                      </Button>
                    </Link>
                    <a href={ship.url} target='_blank' rel='noreferrer'>
                      <Button palette='secondary'>
                        <Text>See Original</Text>
                      </Button>
                    </a>
                  </>
                }
              >
                <Text>
                  {ship.description}
                </Text>
              </Card>
            )}
          </div>
        </Animator>
      </AppContentWrapper>
    </main>
  );
}

export default Ships;
