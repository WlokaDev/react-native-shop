import {
  ActivityIndicator,
  Pressable,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native'
import { ButtonInterface } from '@/components'
import { useThemeStyles } from '@/theme'
import { Fragment } from 'react'

const Button = ({
  variant = 'solid',
  radius = 'lg',
  fontSize = 'sm',
  color = 'primary',
  size = 'lg',
  isDisabled = false,
  isLoading = false,
  isIconOnly = false,
  children,
  styles,
  ...props
}: Readonly<ButtonInterface>) => {
  const buttonStyle = useThemeStyles<ViewStyle>(
    { variant, color, radius, size, isDisabled },
    {
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: 8,
      justifyContent: 'center',
      ...styles?.button,
    },
  )
  const textStyle = useThemeStyles<TextStyle>(
    { fontSize, backgroundColor: color, size },
    {
      fontWeight: '500',
      ...styles?.text,
    },
  )

  return (
    <Pressable
      style={buttonStyle}
      {...props}
      disabled={isDisabled || isLoading}
    >
      {isIconOnly ? (
        isLoading ? (
          <ActivityIndicator />
        ) : (
          children
        )
      ) : (
        <Fragment>
          {isLoading && <ActivityIndicator />}
          <Text style={textStyle}>{children}</Text>
        </Fragment>
      )}
    </Pressable>
  )
}

export { Button }
