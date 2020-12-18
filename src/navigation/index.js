import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AbilityScreen } from "../ui/screens/index";

const Stack = createStackNavigator();

function AppRoute() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ability" component={AbilityScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppRoute;