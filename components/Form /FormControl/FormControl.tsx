import { FieldValues } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { ValidationMessages } from '../ValidationMessages'
import { FormControlTypes } from './FormControl.types'
import { StyleSheet, View } from 'react-native'

/**
 * Component that wraps form inputs and displays validation messages
 */
const FormControl = <T extends FieldValues>({
  errors,
  styles,
  style,
  children,
  name,
}: FormControlTypes<T>) => {
  return (
    <View style={[formControlStyles.container, style]}>
      {children}
      <ErrorMessage
        name={name}
        errors={errors}
        render={({ messages }) => (
          <ValidationMessages
            style={styles?.validationMessages}
            messages={messages}
          />
        )}
      />
    </View>
  )
}

const formControlStyles = StyleSheet.create({
  container: {
    rowGap: 8,
  },
})

export { FormControl }
