import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import JournalScreen from '../screens/JournalScreen';
import AgesNavigator from './AgesNavigator';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ 
    headerTitle: getHeaderTitle(route)
  });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
        }}
      />
      <BottomTab.Screen
        name="Ages"
        component={AgesNavigator}
        options={{
          title: 'Ages',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="baby" />,
        }}
      />
      <BottomTab.Screen
        name="Journal"
        component={JournalScreen}
        options={{
          title: 'Journal',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="notebook" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  return 'InfoBaby';
}

function getHeaderMode(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Ages':
      return false;
    case 'Categories':
      return false;
    default:
      return true;
  }
}
