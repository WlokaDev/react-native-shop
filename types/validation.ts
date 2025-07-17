import { AnyObject, Maybe, ObjectSchema } from 'yup'

export type SchemaInterface<T extends Maybe<AnyObject>> = ObjectSchema<
  T,
  AnyObject
>

export interface ValidationInterface<T extends Maybe<AnyObject>> {
  schema: () => SchemaInterface<T>
  defaultValues: T
}
