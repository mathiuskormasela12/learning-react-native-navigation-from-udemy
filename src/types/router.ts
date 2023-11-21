import { type NativeStackScreenProps } from '@react-navigation/native-stack'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParamList = {
  MealScreen: undefined
  MealOverview: {
    id: string
  }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>
