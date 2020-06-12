import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AgesScreen from '../screens/AgesScreen';
import CategoriesScreen from '../screens/CategoriesScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Ages';

export default class Ages extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack.Navigator
                initialRouteName={INITIAL_ROUTE_NAME}
                headerMode={false}
            >
                <Stack.Screen
                    name='Ages'
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
}