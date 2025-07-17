import { FlatList } from 'react-native'
import { ScreenOne, ScreenTwo } from '@/features/onboarding'
import { useRef } from 'react'
import { router } from 'expo-router'

export default function OnboardingScreen() {
  const ref = useRef<FlatList>(null)

  const handleNext = (index: number) => {
    if (ref.current) {
      if (index === 0) {
        ref.current.scrollToIndex({
          index: 1,
          animated: true,
        })
      } else {
        router.push('/(drawer)')
      }
    }
  }

  return (
    <FlatList
      ref={ref}
      data={[ScreenOne, ScreenTwo]}
      horizontal
      renderItem={({ item: Item, index }) => (
        <Item handleNext={() => handleNext(index)} key={index} />
      )}
      pagingEnabled
      scrollEnabled={false}
    />
  )
}
