import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import HomeScreen from './Components/HomeScreen';
import EventsScreen from './Components/EventsScreen';
import LinksScreen from './Components/LinksScreen';
import SettingsScreen from './Components/SettingsScreen';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if(route.name == "Home") {iconName = 'home-outline'}
            else if(route.name == "Events") {iconName = 'calendar-outline'}
            else if(route.name == "Links") {iconName = 'link-outline'}
            else if(route.name == "Settings") {iconName = 'settings-outline'}

            if(!focused) {size = 18}

            return <Ionicons name={iconName} color={color} size={size} />
          },
          headerStyle: {
            backgroundColor: '#990000',
          },
          headerTitleStyle: {
            color: 'white',
          },
          tabBarStyle: {
            backgroundColor: '#990000',
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#bebebe'
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Events"
          component={EventsScreen}
        />
        <Tab.Screen
          name="Links"
          component={LinksScreen}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;