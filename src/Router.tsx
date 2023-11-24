import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { MealDetail, MealsOverview } from './screens'
import { type RootStackParamList } from './types/router'
import Drawer from './Drawer'
import BottomTab from '../BottomTabs'

const Stack = createNativeStackNavigator<RootStackParamList>()

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='MyBottomTab'

        // Options for all screen, it will be applied to all screen
        screenOptions={{
          // To set header style
          headerStyle: {
            backgroundColor: '#351401'
          },

          // To set title text cilor
          headerTintColor: '#fff',

          // To set style for navigation wrapper, on this style we can set backgroundImage all our entire screen
          contentStyle: {
            backgroundColor: '#3f2f25'
          }
        }}
      >
        <Stack.Screen
          name='MealsScreenDrawer'
          component={Drawer}
          // Options for individual screen
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='MealsOverview'
          component={MealsOverview}
        />

        <Stack.Screen
          name='MealDetail'
          component={MealDetail}
        />

        <Stack.Screen
          name='MyBottomTab'
          component={BottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
