import React from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import styles from './styles'

import { CATEGORIES } from '../../constants/dummy-data'
import useMealsScreen from './useMealsScreen'
import { type IMealsScreenProps } from './types'

const MealsScreen: React.FC<IMealsScreenProps> = ({ navigation }) => {
  const { handleRenderCard } = useMealsScreen(navigation)

  return (
    <View style={styles.page}>
      <SafeAreaView style={styles.safeAreaView}>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={handleRenderCard}
          numColumns={2}
        />
      </SafeAreaView>
    </View>
  )
}

export default MealsScreen
