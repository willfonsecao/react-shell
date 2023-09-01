import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeComponent from './screens/home/home';
import Profile from './screens/profile/profile';

const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent'
    },
};

function ViewNavigator() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name="Home"
                    component={HomeComponent}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ViewNavigator;
