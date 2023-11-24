import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'
import { type RootStackBottomTabScreenProps } from '../../types/router'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Counter: React.FC = () => {
  const navigation = useNavigation<RootStackBottomTabScreenProps<'Counter'>['navigation']>()

  return (
    <View style={styles.page}>
      <Text style={styles.text}>Counter Page</Text>
      <Button title='Go to User' onPress={() => { navigation.navigate('User') }} />
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    color: Colors.ligth
  }
})
