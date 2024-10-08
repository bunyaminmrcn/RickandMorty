import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Colors } from './utils/colors';
import { Screen } from './utils/screens';
import About from './routes/About';
import MainComp from './routes/Main';


import { createDrawerNavigator } from '@react-navigation/drawer';
import { useStateHook } from './contextAPI/state';
import bottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';

const Drawer = createDrawerNavigator();

export default function App() {
    const { store, setStorePartial } = useStateHook()
    return (
        <NavigationContainer onStateChange={(state) => {
            console.log('state change')
            setStorePartial((prev: any) => ({ ...prev, bottomSheet: { index: -1, flex: 0 } }))
        }}>
            <Drawer.Navigator initialRouteName={Screen.Main} screenOptions={{
                headerShown: false
            }}>
                <Drawer.Screen name={Screen.Main} component={MainComp} />
                <Drawer.Screen name={Screen.About} component={About} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

