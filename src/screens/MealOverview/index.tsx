import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { type IMealOverviewProps } from './types'

const MealOverview: React.FC<IMealOverviewProps> = ({ route }) => {
  return (
    <View>
      <SafeAreaView>
        <Text>MealOverview {route.params?.id ?? '-'}</Text>
      </SafeAreaView>
    </View>
  )
}

export default MealOverview
