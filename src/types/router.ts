import { type NativeStackScreenProps } from '@react-navigation/native-stack'
import { type DrawerScreenProps } from '@react-navigation/drawer'
import type {
  CompositeScreenProps
} from '@react-navigation/native'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParamList = {
  MealsScreenDrawer: undefined
  MealsOverview: {
    categoryId: string
  }
  MealDetail: {
    mealId: string
  }
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackDrawerParamList = {
  MealsScreen: undefined
  FavoritesScreen: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

export type RootStackDrawerScreenProps<T extends keyof RootStackDrawerParamList> = CompositeScreenProps<DrawerScreenProps<RootStackDrawerParamList, T>, RootStackScreenProps<keyof RootStackParamList>>
