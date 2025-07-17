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
  isInvalid = false,
  fullWidth = false,
  startContent,
  endContent,
  styles,
  label,
  ...rest
}: Readonly<InputInterface>) => {
  const labelStyle = useThemeStyles<TextStyle>(
    {
      fontSize: 'md',
      size,
      ...(isInvalid ? { color: 'danger' } : {}),
    },
    styles?.label,
  )
  const wrapperStyle = useThemeStyles<ViewStyle>(
    {
      size,
      radius,
      variant: 'outline',
      isDisabled,
      color: isInvalid ? 'danger' : 'default',
    },
    {
      flexDirection: 'row',
      columnGap: 8,
      alignItems: 'center',
      ...styles?.wrapper,
    },
  )

  return (
    <View
      style={{
        ...inputStyles.container,
        ...(fullWidth ? { width: '100%' } : {}),
        ...styles?.container,
      }}
    >
      {label && <Text style={labelStyle}>{label}</Text>}
      <View style={wrapperStyle}>
        {startContent}
        <TextInput {...rest} />
      </View>
    </View>
  )
}

const inputStyles = StyleSheet.create({
  container: {
    rowGap: 8,
  },
})

export { Input }
