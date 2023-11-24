import React, { useCallback } from 'react'
import styles from './styles'
import { type ICard } from './types'
import { Image, Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { type RootStackScreenProps } from '../../types/router'
import ListMealDetail from '../ListMealDetail'

const Card: React.FC<ICard> = ({ id, title, imageUrl, duration, complexity, affordability }) => {
  const navigation = useNavigation<RootStackScreenProps<'MealsOverview'>['navigation']>()

  const handleGoToDetail = useCallback((mealId: string): void => {
    navigation.navigate('MealDetail', {
      mealId
    })
  }, [])

  return (
    <View style={styles.card}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => pressed && styles.isPressed}
        onPress={handleGoToDetail.bind(this, id)}
      >
        <View style={styles.inner}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <ListMealDetail
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  )
}

export default Card
