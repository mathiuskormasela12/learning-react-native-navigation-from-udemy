import React, { useCallback } from 'react'
import { Pressable, Text, View } from 'react-native'
import { type IMealCardProps } from './types'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { type RootStackScreenProps } from '../../types/router'

const MealCard: React.FC<IMealCardProps> = ({ id, title, color, navigation: n2 }) => {
  // To define navigation to move between screen
  const navigation = useNavigation<RootStackScreenProps<'MealScreen'>['navigation']>()

  const handleNavigation = useCallback(() => {
    navigation.navigate('MealOverview', {
      id
    })
  }, [])

  return (
    <View style={styles.card}>
      <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={handleNavigation}>
        <View style={[styles.inner, { backgroundColor: color }]}>
          <Text style={styles.text}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default MealCard
