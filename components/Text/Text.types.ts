import { TextProps, TextStyle } from 'react-native'
import { FontSize } from '@/theme'

export interface TextInterface extends Omit<TextProps, 'style'> {
  fontSize?: FontSize
  style?: TextProps['style']
  fontWeight?: TextStyle['fontWeight']
  color?: string
}
