import { PressableProps, TextStyle, ViewStyle } from 'react-native'
import { FontSize, RadiusType, Size, Variant } from '@/theme'

export interface ButtonInterface extends Omit<PressableProps, 'children'> {
  variant?: Variant
  children: string
  fontSize?: FontSize
  size?: Size
  radius?: RadiusType
  color?: string
  styles?: {
    button?: ViewStyle
    text?: TextStyle
  }
}
