import { Text, View, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import React, { useRef } from 'react';
import { CharactersProvider } from '../contextAPI/main';

import CharacterDetails from '../screens/CharacterDetails';
import Characters from '../screens/Characters';
import { Screen } from '../utils/screens';
import { navigatorHeaderOptions } from '../utils/navigatorHeaderOptions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from '../utils/colors';
import { useTheme } from '../contextAPI/theme';
import { BottomSheetWrapper } from '../components/BottomSheet';
import CharacterFilterContent from '../components/CharacterFilterContent';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';

const Stack = createStackNavigator();

export default ({ navigation }: any) => {
    const { darkTheme, theme, setThemeF } = useTheme();
    
    return (
        
            <Stack.Navigator screenOptions={{
                headerTitleStyle: { color: theme.primary, fontSize: 22 },
                headerTintColor: theme.primary,
                headerStyle: { backgroundColor: theme.secondaryBackground, },
            }}>
                <Stack.Screen
                    name={Screen.MainTop}
                    component={Characters}
                    
                    options={{
                        
                        headerLeft: () => (
                            <FontAwesome5
                                name="bars"
                                size={25}
                                color={theme.focused}
                                onPress={() => navigation.openDrawer()}
                                style={{ left: 10 }}
                            />
                        ),
                        headerRight: () => (
                            <MaterialCommunityIcons
                                name="theme-light-dark"
                                size={25}
                                color={theme.focused}
                                onPress={() => setThemeF(!darkTheme)}
                                style={{ right: 10 }}
                            />
                        )
                    }}
                />
                <Stack.Screen
                    name={Screen.Details}
                    component={CharacterDetails}
                />

            </Stack.Navigator>
    );
};

