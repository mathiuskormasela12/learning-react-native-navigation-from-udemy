import React from 'react'
import styles from './styles'
import { type ICard } from './types'
import { Image, Pressable, Text, View } from 'react-native'

const Card: React.FC<ICard> = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.card}>
      <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => pressed && styles.isPressed}>
        <View style={styles.inner}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.text}>{title}m</Text>
            <Text style={styles.text}>{complexity.toUpperCase()}</Text>
            <Text style={styles.text}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default Card
