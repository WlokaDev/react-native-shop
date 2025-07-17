import { PressableProps, TextStyle, ViewStyle } from 'react-native'
import { FontSize, Radius, Size, Variant } from '@/theme'
import { ReactNode } from 'react'

export interface ButtonInterface extends Omit<PressableProps, 'children'> {
  variant?: Variant
  children: ReactNode
  fontSize?: FontSize
  size?: Size
  radius?: Radius
  color?: string
  isIconOnly?: boolean
  styles?: {
    button?: ViewStyle
    text?: TextStyle
  }
  isDisabled?: boolean
  isLoading?: boolean
}
