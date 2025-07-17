import { TabsInterface } from '@/components/Tabs/Tabs.types'
import { useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Tab } from '@/components/Tabs/Tab'

const Tabs = ({ tabs, activeTab }: Readonly<TabsInterface>) => {
  const [activeTabIndex, setActiveTabIndex] = useState(() =>
    activeTab ? activeTab : tabs.length ? tabs[0].key : '',
  )

  const ActiveContent = useMemo(
    () => tabs.find((tab) => tab.key === activeTabIndex),
    [activeTabIndex, tabs],
  )?.content

  if (!ActiveContent) {
    return null
  }

  return (
    <View>
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <Tab
            label={tab.label}
            key={tab.key}
            onPress={() => setActiveTabIndex(tab.key)}
            isActive={tab.key === activeTabIndex}
          />
        ))}
      </View>
      <View>{ActiveContent}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    columnGap: 10,
  },
})

export { Tabs }
