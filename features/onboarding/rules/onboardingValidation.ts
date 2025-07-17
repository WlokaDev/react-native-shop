import { ValidationInterface } from '@/types/validation'
import { OnboardingRequestInterface } from '../types'
import * as yup from 'yup'

const onboardingValidation: ValidationInterface<OnboardingRequestInterface> = {
  schema: () =>
    yup.object().shape({
      name: yup
        .string()
        .required('Field is required')
        .min(2, 'Name must be at least 2 characters long'),
    }),

  defaultValues: {
    name: '',
  },
}

export { onboardingValidation }
