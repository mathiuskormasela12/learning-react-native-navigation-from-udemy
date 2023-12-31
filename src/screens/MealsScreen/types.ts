import { type ListRenderItem } from 'react-native'
import { type RootStackScreenProps } from '../../types/router'

export interface IHandleRenderCardProps {
  id: string
  title: string
  color: string
}

export type HandleRenderCard = ListRenderItem<IHandleRenderCardProps>

export type MealsScreen = (navigation: RootStackScreenProps<'MealScreen'>['navigation']) => {
  handleRenderCard: HandleRenderCard
}

export interface IMealsScreenProps {
  navigation: RootStackScreenProps<'MealScreen'>['navigation']
}
