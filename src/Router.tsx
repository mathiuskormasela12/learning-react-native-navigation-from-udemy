import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { MealsOverview, MealsScreen } from './screens'
import { type RootStackParamList } from './types/router'

const Stack = createNativeStackNavigator<RootStackParamList>()

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='MealsScreen'

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
          name='MealsScreen'
          component={MealsScreen}
          // Options for individual screen
          options={{
            // To set title
            title: 'All Categories'

            // // To set header style
            // headerStyle: {
            //   backgroundColor: '#351401'
            // },

            // // To set title text cilor
            // headerTintColor: '#fff',

            // // To set style for navigation wrapper, on this style we can set backgroundImage all our entire screen
            // contentStyle: {
            //   backgroundColor: '#3f2f25'
            // }
          }}
        />
        <Stack.Screen
          name='MealsOverview'
          component={MealsOverview}

          // Dynamic Options, we can pass options as function to make it dynamic
          options={(props) => {
            // eslint-disable-next-line react/prop-types
            const { route } = props
            // eslint-disable-next-line react/prop-types
            const title: string = `${route.params?.categoryId ?? 'Overview'}`

            return {
              title
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
