import { TabInterface } from './Tab.types'
import { useEffect, useMemo } from 'react'
import {
  Animated,
  Pressable,
  TextStyle,
  useAnimatedValue,
  ViewStyle,
} from 'react-native'
import { themeConfig } from '@/theme'

const Tab = ({ isActive = false, onPress, label }: Readonly<TabInterface>) => {
  const fontSize = useAnimatedValue(16)
  const { text, container } = useMemo(() => styles(isActive), [isActive])

  useEffect(() => {
    Animated.timing(fontSize, {
      toValue: isActive ? 20 : 14,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }, [isActive])

  return (
    <Pressable style={container} onPress={onPress}>
      <Animated.Text style={[text, { fontSize }]}>{label}</Animated.Text>
    </Pressable>
  )
}

const styles = (
  isActive: boolean,
): {
  container: ViewStyle
  text: TextStyle
} => ({
  container: {
    borderBottomColor: themeConfig.colors.secondary.DEFAULT,
    borderBottomWidth: isActive ? 1 : 0,
    paddingBottom: 8,
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: isActive ? '500' : '400',
    color: isActive ? themeConfig.colors.text : '#938DB5',
  },
})

export { Tab }
