import { InputInterface } from './Input.types'
import { useThemeStyles } from '@/theme'
import {
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

const Input = ({
  size = 'md',
  radius = 'lg',
  isDisabled = false,
  variant = 'solid',
  isInvalid = false,
  styles,
  label,
  ...rest
}: Readonly<InputInterface>) => {
  const labelStyle = useThemeStyles<TextStyle>(
    {
      fontSize: 'md',
      size,
    },
    styles?.label,
  )
  const wrapperStyle = useThemeStyles<ViewStyle>(
    {
      size,
      radius,
      variant,
      isDisabled,
      color: 'default',
    },
    {
      ...inputStyles?.wrapper,
      ...styles?.wrapper,
    },
  )

  return (
    <View
      style={{
        ...inputStyles.container,
        ...styles?.container,
      }}
    >
      {label && <Text style={labelStyle}>{label}</Text>}
      <View style={wrapperStyle}>
        <TextInput {...rest} />
      </View>
    </View>
  )
}

const inputStyles = StyleSheet.create({
  container: {
    rowGap: 8,
  },
  wrapper: {
    borderColor: '#CFD5D9',
    borderWidth: 1,
  },
})

export { Input }
