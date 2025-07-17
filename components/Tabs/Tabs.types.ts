import { ReactNode } from 'react'

export interface TabInterface {
  label: string
  content: ReactNode
  key: string
}

export interface TabsInterface {
  tabs: TabInterface[]
  activeTab?: string
}
