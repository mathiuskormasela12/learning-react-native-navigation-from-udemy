import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { type ICard } from './types'
import styles from './styles'

const Card: React.FC<ICard> = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.card}>
      <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => pressed && styles.isPressed}>
        <View style={styles.inner}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.subtitle}>{duration}m</Text>
            <Text style={styles.subtitle}>{complexity.toUpperCase()}</Text>
            <Text style={styles.subtitle}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default Card
