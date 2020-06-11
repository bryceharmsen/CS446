import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AgesScreen from '../screens/AgesScreen';
import CategoriesScreen from '../screens/CategoriesScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Ages';

export default class Ages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesTitle: 'Categories'
        }
    }

    changeCategoryTitle(title) {
        this.setState({ categoriesTitle: title })
    }

    render() {
        return (
            <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
                <Stack.Screen
                    name='Groups'
                    component={AgesScreen}
                    options={{
                        title: 'Age Groups'
                    }}
                    changeTitle={this.changeCategoryTitle}
                />
                <Stack.Screen
                    name='Categories'
                    component={CategoriesScreen}
                    options={{
                        title: 'Categories'
                    }}
                    changeTitle={this.changeCategoryTitle}
                />
            </Stack.Navigator>
        )
    }
}