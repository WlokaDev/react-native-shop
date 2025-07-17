import { NamedStyle, Props } from '../../types'
import { useTheme } from '../../themeContext'
import { createThemeBuilder } from '../../themeBuilder'
import { useMemo } from 'react'
import { Nullable } from '@/types'

const useThemeStyles = <Component extends NamedStyle>(
  props: Props<Component>,
  style?: Nullable<Component>,
) => {
  const config = useTheme()

  return useMemo(
    () => createThemeBuilder(config, props, style),
    [config, props, style],
  )
}

export { useThemeStyles }
