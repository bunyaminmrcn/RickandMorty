/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from 'react';
import App from './src/App';
import 'react-native-gesture-handler';

import { ApolloProvider } from '@apollo/client';
import apolloClient from './config/apollo.config';
import { ThemeProvider } from './src/contextAPI/theme';
import { StoreProvider } from './src/contextAPI/state';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheetWrapper from './src/components/BottomSheet';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import CharacterFilterContent from './src/components/CharacterFilterContent';
import { CharactersProvider } from './src/contextAPI/main';

export default function AppWrapper() {
  const bottomSheetRef = useRef<BottomSheet>(null)
  return <ApolloProvider client={apolloClient}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StoreProvider>
        <ThemeProvider>
          <CharactersProvider>
            <App />
            {
              <BottomSheetWrapper ref={bottomSheetRef}>
                <CharacterFilterContent />
              </BottomSheetWrapper>
            }
          </CharactersProvider>
        </ThemeProvider>
      </StoreProvider>
    </GestureHandlerRootView>





  </ApolloProvider >;
}