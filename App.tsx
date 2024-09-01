/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import App from './src/App';
import 'react-native-gesture-handler';
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppWrapper() {
  return <>
    <StatusBar backgroundColor="black" />
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}
    >
      <App />
    </SafeAreaView>
  </>;
}