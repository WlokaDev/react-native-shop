import { TextInputProps, TextStyle, ViewStyle } from 'react-native'
import { Radius, Size, Variant } from '@/theme'
import { ReactNode } from 'react'

export interface InputInterface
  extends Omit<TextInputProps, 'readOnly' | 'style'> {
  isDisabled?: boolean
  isInvalid?: boolean
  variant?: Variant
  size?: Size
  radius?: Radius
  startContent?: ReactNode
  endContent?: ReactNode
  styles?: {
    container?: ViewStyle
    label?: TextStyle
    wrapper?: ViewStyle
    input?: TextInputProps['style']
  }
  label?: string
}
