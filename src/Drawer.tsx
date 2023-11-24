import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import { type RootStackDrawerParamList } from './types/router'
import { FavoritesScreen, MealsScreen } from './screens'

const Stack = createDrawerNavigator<RootStackDrawerParamList>()

const Drawer: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // To set header style
        headerStyle: {
          backgroundColor: '#351401'
        },

        // To set title text color
        headerTintColor: '#fff',

        // To set style for navigation wrapper, on this style we can set backgroundImage all our entire screen
        sceneContainerStyle: {
          backgroundColor: '#3f2f25'
        },

        // To set style for drawer
        drawerStyle: {
          backgroundColor: '#3f2f25'
        },

        // To set background color of active screen
        drawerActiveBackgroundColor: '#806b5e',

        // To set text color of active screen
        drawerActiveTintColor: 'white',

        // To set bg color of active screen
        drawerInactiveBackgroundColor: 'transparent',

        // To set text color of inactive screen
        drawerInactiveTintColor: 'white'
      }}
    >
      <Stack.Screen
        name='MealsScreen'
        component={MealsScreen}
        options={{
          drawerLabel: 'Meals Screen',
          title: 'All Categories',
          drawerIcon: ({ color, size }) => {
            return (
              <Ionicons name='home' size={size} color={color} />
            )
          }
        }}
      />
      <Stack.Screen
        name='FavoritesScreen'
        component={FavoritesScreen}
        options={{
          drawerLabel: 'Favorite',
          title: 'Favorite',
          drawerIcon: ({ color, size }) => {
            return (
              <Ionicons name='star' size={size} color={color} />
            )
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default Drawer
