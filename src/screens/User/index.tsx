import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { Colors } from '../../themes'
import { useNavigation } from '@react-navigation/native'
import { type RootStackBottomTabScreenProps } from '../../types/router'

const User: React.FC = () => {
  const navigation = useNavigation<RootStackBottomTabScreenProps<'User'>['navigation']>()

  return (
    <View style={styles.page}>
     <Text style={styles.text}>User Page</Text>
     <Button title='Go to Counter' onPress={() => { navigation.navigate('Counter') }} />
    </View>
  )
}

export default User

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
