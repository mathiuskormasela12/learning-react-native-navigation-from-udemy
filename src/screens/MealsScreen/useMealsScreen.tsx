import React, { useCallback } from 'react'
import { type HandleRenderCard, type MealsScreen } from './types'
import { MealCard } from '../../components'

const useMealsScreen: MealsScreen = (navigation) => {
  const handleRenderCard: HandleRenderCard = useCallback(({ item: { id, color, title } }) => {
    return (
      <MealCard id={id} title={title} color={color} navigation={navigation} />
    )
  }, [])

  return {
    handleRenderCard
  }
}

export default useMealsScreen
