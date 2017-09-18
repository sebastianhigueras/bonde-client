import React from 'react'
import {
  SettingsPageLayout,
  SettingsPageMenuLayout,
  SettingsPageContentLayout
} from '~client/components/layout'
import { Tabs, Tab } from '~client/components/navigation'


export default ({ children }) => (
  <SettingsPageLayout>
    <SettingsPageMenuLayout title='Nova campanha de email'>
      <Tabs>
        <Tab isActive={true} path='/communication' text='Conteúdo' />
      </Tabs>
    </SettingsPageMenuLayout>
    <SettingsPageContentLayout>
      {children}
    </SettingsPageContentLayout>
  </SettingsPageLayout>
)
