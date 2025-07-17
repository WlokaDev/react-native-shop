import { ProductInterface } from '@/features/products'

export const homeMockData: {
  recommended: ProductInterface[]
  hottest: ProductInterface[]
  popular: ProductInterface[]
} = {
  recommended: [
    {
      id: 1,
      name: 'Honey lime combo',
      description:
        'Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.',
      price: 1299,
      image_url: require('@/assets/images/mock/products/1.png'),
      is_favorited: false,
    },
    {
      id: 2,
      name: 'Berry mango combo',
      description:
        'Red Quinoa, Mango, Blueberries, Strawberries, Honey, Fresh mint.',
      price: 1199,
      image_url: require('@/assets/images/mock/products/2.png'),
      is_favorited: true,
    },
  ],
  hottest: [
    {
      id: 3,
      name: 'Strawberry delight',
      description:
        'Red Quinoa, Strawberries, Honey, Blueberries, Mango, Fresh mint.',
      price: 1099,
      image_url: require('@/assets/images/mock/products/3.png'),
      is_favorited: false,
    },
    {
      id: 4,
      name: 'Mango fiesta',
      description:
        'Red Quinoa, Mango, Honey, Strawberries, Blueberries, Fresh mint.',
      price: 1399,
      image_url: require('@/assets/images/mock/products/4.png'),
      is_favorited: true,
    },
  ],
  popular: [
    {
      id: 1,
      name: 'Honey lime combo',
      description:
        'Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.',
      price: 1299,
      image_url: require('@/assets/images/mock/products/1.png'),
      is_favorited: false,
    },
    {
      id: 2,
      name: 'Berry mango combo',
      description:
        'Red Quinoa, Mango, Blueberries, Strawberries, Honey, Fresh mint.',
      price: 1199,
      image_url: require('@/assets/images/mock/products/2.png'),
      is_favorited: true,
    },
  ],
}
