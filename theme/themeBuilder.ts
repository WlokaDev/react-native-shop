import { NamedStyle, Props, Size, Variant } from './types'
import _ from 'lodash'
import { match } from 'ts-pattern'
import { TextStyle, ViewStyle } from 'react-native'
import { themeConfig } from './themeConfig'

class ThemeBuilder<Component extends NamedStyle> {
  constructor(
    private config: typeof themeConfig,
    private properties: Props<Component>,
    private style?: Component,
  ) {}

  public static from<Component extends NamedStyle>(
    config: typeof themeConfig,
    properties: Props<Component>,
    style?: Component,
  ): ThemeBuilder<Component> {
    return new ThemeBuilder<Component>(config, properties, style)
  }

  public buildStyles(): Component {
    if (this.isVariantableComponent(this.properties)) {
      const { variant, color, size } = this.properties

      return {
        ...this.resolveVariant(variant, color),
        borderRadius: this.resolveRadius(),
        ...this.resolvePaddingBySize(size),
        ...this.style,
      } as Component
    }

    if (this.isTextableComponent(this.properties)) {
      const { fontSize, color, backgroundColor, size } = this.properties

      const styles: TextStyle = {
        fontSize: this.config.fontSize[fontSize],
      }

      if (color) {
        styles.color = this.getColor(color)
      }

      if (!backgroundColor) {
        styles.color = this.config.colors.text
      }

      if (backgroundColor) {
        const backgroundColorName = backgroundColor.split('-')[0]

        styles.color = this.getColor(`${backgroundColorName}-text`)
      }

      if (size) {
        styles.fontSize = this.resolveFontSizeBySize(size)
      }

      return {
        ...styles,
        ...this.style,
      } as Component
    }

    return {
      ...this.style,
    } as Component
  }

  private resolvePaddingBySize(size: Size): ViewStyle {
    return this.config.size[size]
  }

  private resolveFontSizeBySize(size: Size): number {
    return this.config.size[size].fontSize
  }

  private resolveRadius(): number {
    const radius = this.properties.radius

    if (!radius) {
      return this.config.radius.sm
    }

    return this.config.radius[radius]
  }

  private resolveVariant(variant: Variant, color?: string) {
    return match(variant)
      .with('solid', () => ({
        backgroundColor: this.getColor(color),
      }))
      .with('outline', () => ({
        borderWidth: this.config.borderWidth.sm,
        borderColor: this.getColor(color),
        backgroundColor: 'transparent',
      }))
      .exhaustive()
  }

  private getColor(color?: string): string {
    if (!color) {
      return this.config.colors.primary.DEFAULT
    }

    const colorConfig = _.get(this.config.colors, color.replace('-', '.'))

    if (!colorConfig) {
      return this.config.colors.primary.DEFAULT
    }

    if (typeof colorConfig === 'object') {
      return colorConfig.DEFAULT
    }

    return colorConfig as string
  }

  private isVariantableComponent(props: any): props is Props<ViewStyle> {
    return Object.hasOwn(props, 'variant')
  }

  private isTextableComponent(props: any): props is Props<TextStyle> {
    return Object.hasOwn(props, 'fontSize')
  }
}

const createThemeBuilder = <Component extends NamedStyle>(
  config: typeof themeConfig,
  properties: Props<Component>,
  style?: Component,
) => ThemeBuilder.from<Component>(config, properties, style).buildStyles()

export { createThemeBuilder, ThemeBuilder }
