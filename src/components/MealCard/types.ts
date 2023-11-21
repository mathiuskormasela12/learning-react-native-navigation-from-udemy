import { type RootStackScreenProps } from '../../types/router'

export interface IMealCardProps {
  title: string
  color: string
  id: string
  navigation: RootStackScreenProps<'MealScreen'>['navigation']
}
