import { reduxForm } from 'redux-form'
import { login } from '../redux/action-creators'
import Selectors from '../redux/selectors'
import LoginForm from './login-form'

const fields = ['email', 'password']

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Informe seu email'
    errors.valid = false
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Email inválido'
    errors.valid = false
  }
  if (!values.password) {
    errors.password = 'Informe sua senha'
    errors.valid = false
  }
  return errors
}

const mapStateToProps = (state, props) => ({
  user: Selectors(state, props).getUser()
})

const mapActionsToProps = { login }

export default reduxForm({ form: 'loginForm', fields, validade })(mapStateToProps, mapActionsToProps)(LoginForm)
