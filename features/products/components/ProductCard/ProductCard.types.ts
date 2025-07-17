import { ProductInterface } from '../../types'

export interface ProductCardInterface {
  product: ProductInterface
  backgroundColor?: string
  size?: 'sm' | 'md'
}
