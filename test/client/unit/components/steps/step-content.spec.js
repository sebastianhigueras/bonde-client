import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { StepContent, StepButton } from '~client/components/steps'


describe('~client/components/steps/step-content', () => {

  let content

  beforeEach(() => {
    content = mount(<StepContent />)
  })

  it('should render without crashed', () => {
    expect(content).to.be.ok
  })

  it('should render children', () => {
    const content = mount(<StepContent><p id='did'>Dummy</p></StepContent>)
    expect(content.find('p#did').length).to.equal(1)
  })

  it('should render header when title is passed', () => {
    const title = 'Insira o domínio desejado'
    const position = '1'
    content.setProps({ title, position })
    expect(content.find('h3').text()).to.contains(title)
    expect(content.find('h3').find('span').text()).to.equal(position)
  })

  it('should pass onNextStep only for <StepButton />', () => {
    const onNextStep = () => {}
    const content = mount(
      <StepContent onNextStep={onNextStep}>
        <p id='did'>Dummy</p>
        <StepButton>Continue</StepButton>
      </StepContent>
    )
    expect(content.find('StepButton').props().onNextStep).to.deep.equal(onNextStep)
  })

})