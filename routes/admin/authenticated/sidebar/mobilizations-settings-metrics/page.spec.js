import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Page from '~routes/admin/authenticated/sidebar/mobilizations-settings-metrics/page'

describe('routes/admin/authenticated/sidebar/mobilizations-settings-metrics/page', () => {
  let wrapper
  const props = {
    mobilization: { id: 1 }
  }

  beforeAll(() => {
    wrapper = shallow(<Page {...props} />)
  })

  describe('#render', () => {
    it('should render without crash', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.be.ok
    })
  })
})
