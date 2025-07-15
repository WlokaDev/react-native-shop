import { PressableProps, TextStyle, ViewStyle } from 'react-native'
import { FontSize, Radius, Size, Variant } from '@/theme'

export interface ButtonInterface extends Omit<PressableProps, 'children'> {
  variant?: Variant
  children: string
  fontSize?: FontSize
  size?: Size
  radius?: Radius
  color?: string
  styles?: {
    button?: ViewStyle
    text?: TextStyle
  }
  isDisabled?: boolean
}
