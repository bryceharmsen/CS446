import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AgesScreen from '../screens/AgesScreen';
import CategoriesScreen from '../screens/CategoriesScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Ages';

export default function Ages({ navigation }) {
    return (
        <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <Stack.Screen
                name='Groups'
                component={AgesScreen}
                options={{
                    title: 'Age Groups'
                }}
            />
            <Stack.Screen
                name='Categories'
                component={CategoriesScreen}
                options={{
                    title: 'Categories'
                }}
            />
        </Stack.Navigator>
    )
}