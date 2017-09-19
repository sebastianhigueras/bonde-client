import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { isValidFromEmail } from '~client/utils/validation-helper'
import Page from './page'

const fields = ['name', 'subject', 'sender', 'content']

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Preenchimento obrigatório'
  }
  if (!values.subject) {
    errors.subject = 'Preenchimento obrigatório'
  }
  if (!values.sender) {
    errors.sender = 'Preenchimento obrigatório'
  } else if (!isValidFromEmail(values.sender)) {
    errors.sender = 'Formato de remetente inválido'
  }
  return errors
}

const mapActionsToProps = (dispatch) => ({
  submit: (values) => {
    console.log('onSubmit', values)
  }
})

export default connect(undefined, mapActionsToProps)(
  reduxForm({ form: 'createCommunicationForm', fields, validate })(Page)
)
