import { expect } from 'chai'

import authReducer, { initialState } from '~authenticate/redux/reducer'
import requireLoginWrapper from '~authenticate/require-login-wrapper'


describe('authenticate/require-login-wrapper', () => {

  describe('isnt logged', () => {
  
    const nextState = {
      auth: authReducer(initialState)
    }
 
    it('should call replace passed redirectUrl', () => {
      const redirectUrl = '/login'
      const requireLogin = requireLoginWrapper(redirectUrl)
      let result
      requireLogin(nextState, path => result = path)
      expect(result).to.equal(redirectUrl)
    })
  })

  describe('is logged', () => {
    const nextState = {
      auth: {
        ...authReducer(initialState),
        user: { name: 'Lorem', email: 'lorem@ipsum.com' }
      }
    }

    it('should not call replace', () => {
      const requireLogin = requireLoginWrapper('/login')
      let result
      requireLogin(nextState, path => result = path)
      expect(result).to.equal(undefined)
    })
  })
})
