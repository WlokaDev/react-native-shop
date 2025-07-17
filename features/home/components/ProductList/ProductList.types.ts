import { ProductInterface } from '@/features/products'

export interface ProductListInterface {
  products: ProductInterface[]
  withRandomColor?: boolean
  size?: 'sm' | 'md'
}
