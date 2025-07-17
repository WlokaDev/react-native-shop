import { Tabs as BaseTabs } from '@/components'
import { homeMockData } from '@/mock/home'
import { ProductList } from '../ProductList'

const Tabs = () => {
  return (
    <BaseTabs
      tabs={[
        {
          label: 'Hottest',
          key: 'hottest',
          content: (
            <ProductList
              size={'sm'}
              products={homeMockData.hottest}
              withRandomColor
            />
          ),
        },
        {
          label: 'Popular',
          key: 'popular',
          content: (
            <ProductList
              size={'sm'}
              products={homeMockData.popular}
              withRandomColor
            />
          ),
        },
      ]}
    />
  )
}

export { Tabs }
