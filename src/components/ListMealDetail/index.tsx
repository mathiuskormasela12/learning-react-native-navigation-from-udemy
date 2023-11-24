/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { View, Text, StyleSheet, type TextStyle } from 'react-native'
import { type ICard } from '../Card/types'

type DefaultProps = Pick<ICard, 'duration' | 'complexity' | 'affordability'>

type Props = DefaultProps & {
  textStyle?: TextStyle
}

const ListMealDetail: React.FC<Props> = ({ duration, complexity, affordability, textStyle }) => {
  return (
    <View style={styles.footer}>
      <Text style={[styles.text, textStyle!]}>{duration}m</Text>
      <Text style={[styles.text, textStyle!]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.text, textStyle!]}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

export default ListMealDetail

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
    marginHorizontal: 4
  }
})
