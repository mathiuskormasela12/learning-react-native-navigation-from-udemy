import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { MealOverview, MealsScreen } from './screens'

const Stack = createNativeStackNavigator()

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // Define initial screen, React Native will show this screen as a first screen
        initialRouteName='MealsScreen'
      >
        {
          // If we don't specify initalRouteName, React Native will use
          // screen order instaed. So in this case, MealsScreen wil be the default screen
        }
        <Stack.Screen name='MealsScreen' component={MealsScreen} />
        <Stack.Screen name='MealOverview' component={MealOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
