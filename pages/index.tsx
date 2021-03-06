import { Text } from '@arwes/core';

import { AppContentWrapper } from '../components/AppContentWrapper';

export default function Home () {
  return (
    <main>
      <AppContentWrapper>
        <header>
          <Text as='h1'>Star Citizen Finder</Text>
        </header>
        <div>
          <Text as='p'>This is a Star Citizen application for find any item in the Star Citizen universe.</Text>
        </div>
      </AppContentWrapper>
    </main>
  );
}
