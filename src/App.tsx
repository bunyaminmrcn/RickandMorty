import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Colors } from './utils/colors';
import { Screen } from './utils/screens';
import About from './routes/About';
import Main from './routes/Main';


import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={Screen.Main} screenOptions={{
                headerShown: false
            }}>
                <Drawer.Screen name={Screen.Main} component={Main} />
                <Drawer.Screen name={Screen.About} component={About} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

