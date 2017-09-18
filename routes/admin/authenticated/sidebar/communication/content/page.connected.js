import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import Page from './page'

const fields = ['name', 'subject', 'sender']

const mapActionsToProps = (dispatch) => ({
  submit: (values) => {
    debugger
    console.log('onSubmit', values)
  }
})

export default connect(undefined, mapActionsToProps)(
  reduxForm({ form: 'createCommunicationForm', fields })(Page)
)
