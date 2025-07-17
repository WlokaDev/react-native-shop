import { FieldErrors, FieldName, FieldValues } from 'react-hook-form'
import React from 'react'
import { FieldValuesFromFieldErrors } from '@hookform/error-message'
import { ViewStyle } from 'react-native'

export interface FormControlTypes<T extends FieldValues> {
  errors?: FieldErrors<T>
  styles?: {
    validationMessages?: ViewStyle
  }
  style?: ViewStyle
  name: FieldName<FieldValuesFromFieldErrors<FieldErrors<T>>>
  children: React.ReactNode | React.ReactNode[]
}
