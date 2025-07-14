import { NamedStyle, Props } from '../../types'
import { useTheme } from '../../themeContext'
import { createThemeBuilder } from '../../themeBuilder'
import { useMemo } from 'react'

const useThemeStyles = <Component extends NamedStyle>(
  props: Props<Component>,
  style?: Component,
) => {
  const config = useTheme()

  return useMemo(
    () => createThemeBuilder(config, props, style),
    [config, props, style],
  )
}

export { useThemeStyles }
