import React, { useLayoutEffect } from 'react'
import { View, ScrollView, Image, Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { MEALS } from '../../constants/dummy-data'
import { type IMealDetailProps } from './types'
import { Colors } from '../../themes'
import { List, ListMealDetail, Subtitle } from '../../components'

const MealDetail: React.FC<IMealDetailProps> = ({ route, navigation }) => {
  const { mealId } = route.params

  const selectedMeal = MEALS.find(item => item.id === mealId)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <Ionicons name='star' size={20} color={Colors.ligth} />
          </Pressable>
        )
      }
    })
  }, [navigation])

  return (
    <ScrollView style={styles.rootContainer}>
    <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
    <Text style={styles.title}>{selectedMeal?.title}</Text>
    <ListMealDetail
      duration={selectedMeal?.duration ?? 0}
      complexity={selectedMeal?.complexity ?? ''}
      affordability={selectedMeal?.affordability ?? ''}
      textStyle={styles.detailText}
    />
    <View style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal?.ingredients ?? []} />
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal?.steps ?? []} />
      </View>
    </View>
  </ScrollView>
  )
}

export default MealDetail
