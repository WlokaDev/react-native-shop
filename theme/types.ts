import { TextStyle, ViewStyle } from 'react-native'
import { ImageStyle } from 'expo-image'
import { themeConfig } from './themeConfig'

type ColorVariant = 'DEFAULT'

type ColorAdditionalVariants = {
  background: Record<ColorVariant, string>
  foreground: Record<ColorVariant, string>
  text: Record<ColorVariant, string>
}

type Props<Component extends NamedStyle> = RequiredThemeProperties<Component> &
  ThemeProperties

type ThemeProperties = {
  radius?: Radius
  color?: string
  isDisabled?: boolean
}

type RequiredThemeProperties<Component extends NamedStyle> =
  Component extends ViewStyle
    ? {
        variant: Variant
        size: Size
      }
    : Component extends TextStyle
      ? {
          fontSize: FontSize
          backgroundColor?: string
          size?: Size
        }
      : {}

type ColorConfig =
  | (Record<ColorVariant, string> & ColorAdditionalVariants)
  | string
type Variant = 'solid' | 'outline'
type Size = 'none' | 'sm' | 'md' | 'lg'
type Radius = 'none' | 'sm' | 'md' | 'lg' | 'full'
type NamedStyle = ViewStyle | TextStyle | ImageStyle
type BorderSize = 'none' | 'sm' | 'md' | 'lg'
type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

interface ThemeConfig {
  colors: {
    default: ColorConfig
    primary: ColorConfig
    secondary: ColorConfig
    danger: ColorConfig
    warning: ColorConfig
    text: string
  } & Record<string, ColorConfig>
  radius: Record<Radius, number>
  borderWidth: Record<BorderSize, number>
  fontSize: Record<FontSize, number>
  size: Record<
    Size,
    {
      paddingVertical: number
      paddingHorizontal: number
      fontSize: number
    }
  >
}

type Theme = typeof themeConfig

export {
  ColorVariant,
  ColorAdditionalVariants,
  ColorConfig,
  Variant,
  Radius,
  NamedStyle,
  BorderSize,
  FontSize,
  ThemeConfig,
  Props,
  Size,
  Theme,
}
