import React from 'react'
import { expect } from 'chai'

import { shallowWithIntl } from '~root/intl/helpers'
import { NavbarEditionWrapper } from '~client/components/navigation/navbar/navbar-edition-wrapper'

const block = {}
const mobilization = {}
const auth = {}
const dispatch = () => {}

describe('client/components/navigation/navbar/navbar-edition-wrapper', () => {
  const wrapper = shallowWithIntl(
    <NavbarEditionWrapper
      block={block}
      mobilization={mobilization}
      auth={auth}
      dispatch={dispatch}
    />
  )
  it('should render form when its in the edit mode', () => {
    wrapper.setState({ isEditing: true })
    expect(wrapper.find('NavbarForm')).to.have.length(1)
  })

  it('should render button when its not in the edit mode', () => {
    wrapper.setState({ isEditing: false })
    expect(wrapper.find('NavbarButton')).to.length(1)
  })
})
