import React, { useLayoutEffect } from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import { type IMealOverviewProps } from './types'
import { CATEGORIES, MEALS } from '../../constants/dummy-data'
import styles from './styles'
import { Card } from '../../components'

const MealsOverview: React.FC<IMealOverviewProps> = ({ route, navigation }) => {
  const catId = route.params.categoryId

  // It will be executed when component is being rendered
  // it's not like useEffect, useEffect will be executed after component is rendered
  useLayoutEffect(() => {
    const title = CATEGORIES.find(item => item.id === catId)?.title ?? ''

    navigation.setOptions({
      title
    })
  }, [navigation, route])

  const displayedMeals = MEALS.filter(item => item.categoryIds.includes(catId))

  return (
    <View style={styles.page}>
      <SafeAreaView style={styles.wrapper}>
       <FlatList
        style={styles.flatList}
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
          }

          return (
            <Card
              {...mealItemProps}
            />
          )
        }}
       />
      </SafeAreaView>
    </View>
  )
}

export default MealsOverview
