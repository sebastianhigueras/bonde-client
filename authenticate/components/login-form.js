import React from 'react'
import {
  FormRedux,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  FormError
} from '~client/components/forms'


const FormLogin = props => {
  const { login, fields: { email, password }, ...formProps } = props

  return (
    <FormRedux nosubmit className='bg-white rounded' onSubmit={login} {...formProps}>
      <FormGroup controlId='emailId' {...email}>
        <ControlLabel>E-mail</ControlLabel>
        <FormControl type='email' placeholder='exemplo@email.com' />
      </FormGroup>
      <FormGroup controlId='passwordId' {...password}>
        <ControlLabel>Senha</ControlLabel>
        <FormControl type='password' placeholder='••••••••••' />
      </FormGroup>
      <Button type='submit' className='white col-12 rounded-bottom'>
        {formProps.submitting ? 'Carregando...' : 'Entrar'}
      </Button>
      <FormError className='mt2' />
    </FormRedux>
  )
}

export default FormLogin
