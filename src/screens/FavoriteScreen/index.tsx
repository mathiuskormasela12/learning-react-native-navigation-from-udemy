import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import { type RootStackDrawerScreenProps } from '../../types/router'

const FavoritesScreen: React.FC = () => {
  const navigation = useNavigation<RootStackDrawerScreenProps<'FavoritesScreen'>['navigation']>()

  const handleClose = (): void => {
    navigation.toggleDrawer()
  }

  return <Text onPress={handleClose}>The favorites screen!</Text>
}

export default FavoritesScreen
