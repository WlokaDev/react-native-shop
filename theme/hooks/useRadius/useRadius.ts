import { useTheme } from '../../themeContext'
import { useMemo } from 'react'
import { Radius } from '../../types'

const useRadius = (
  radius: Radius,
): {
  borderRadius: number
} => {
  const config = useTheme()

  return useMemo(
    () => ({
      borderRadius: config.radius[radius],
    }),
    [radius, config],
  )
}

export { useRadius }
