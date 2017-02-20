import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import LoginForm from '~authenticate/components/login-form'

describe('authenticate/components/login-form', () => {
  
  let loginForm
  const props = {
    login: user => {},
    fields: {
      email: {
        name: 'email',
        onChange: () => {},
        value: ''
      },
      password: {
        name: 'password',
        onChange: () => {},
        value: ''
      }
    },
    handleSubmit: () => {},
    submitting: false
  }

  beforeEach(() => {
    loginForm = mount(<LoginForm {...props} />)
  })
  
  it('should render FormRedux', () => {
    expect(loginForm.find('FormRedux').length).to.equal(1)
  })

  it('should render email and password fields', () => {
    const email = loginForm.find('FormGroup').at(0)
    expect(email.props().name).to.equal('email')
    const password = loginForm.find('FormGroup').at(1)
    expect(password.props().name).to.equal('password')
  })

  it('should render form error', () => {
    expect(loginForm.find('FormError').length).to.equal(1)
  })
  
  describe('render submit button', () => {
    
    it('should Enter text when not is submiting', () => {
      expect(loginForm.find('Button').text()).to.equal('Entrar')
    })

    it('should Carregando text when is submitting', () => {
      loginForm.setProps({ submitting: true })
      expect(loginForm.find('Button').text()).to.equal('Carregando...')
    })
  })
})
