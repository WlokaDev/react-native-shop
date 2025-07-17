import { useTheme } from '../../themeContext'
import { useMemo } from 'react'
import _ from 'lodash'

const useColor = (color: string): string => {
  const config = useTheme()
  const defaultColor = useMemo(() => config.colors.primary.DEFAULT, [config])

  return useMemo(() => {
    if (!color) {
      return defaultColor
    }

    const colorConfig = _.get(config.colors, color.replace('-', '.'))

    if (!colorConfig) {
      return defaultColor
    }

    if (typeof colorConfig === 'object') {
      return colorConfig.DEFAULT
    }

    return colorConfig as string
  }, [color, config, defaultColor])
}

export { useColor }
