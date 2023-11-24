import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { type RootStackBottomTabParamList } from './src/types/router'
import { Counter, User } from './src/screens'
import { Ionicons } from '@expo/vector-icons'

const Stack = createBottomTabNavigator<RootStackBottomTabParamList>()

const BottomTab: React.FC = () => {
  return (
    <Stack.Navigator
     // To set style for navigation wrapper, on this style we can set backgroundImage all our entire screen
      sceneContainerStyle={
        {
          backgroundColor: 'green'
        }
      }
      screenOptions={{
        // Set header style
        headerStyle: {
          backgroundColor: 'red'
        },

        // Set header text style
        headerTintColor: 'blue',

        // Set tab bar style
        tabBarStyle: {
          backgroundColor: 'white'
        }

      }}
    >
      <Stack.Screen name='Counter' component={Counter} options={{
        // Tab bar color when it actives
        tabBarActiveTintColor: 'red',

        // Tab bar bg color when it actives
        tabBarActiveBackgroundColor: 'blue',

        // Tab bar icon
        tabBarIcon: ({ color, size }) => {
          return (
            <Ionicons name='person' color={color} size={size}/>
          )
        }

      }} />
      <Stack.Screen name='User' component={User} options={{
        // Tab bar color when it actives
        tabBarActiveTintColor: 'red',

        // Tab bar bg color when it actives
        tabBarActiveBackgroundColor: 'blue',

        // Tab bar icon
        tabBarIcon: ({ color, size }) => {
          return (
           <Ionicons name='add-circle' color={color} size={size}/>
          )
        }
      }} />
    </Stack.Navigator>
  )
}

export default BottomTab
