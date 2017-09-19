import React from 'react'
import PropTypes from 'prop-types'
import { Raw } from 'slate'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from '~client/components/forms'
import { SettingsForm } from '~client/ux/components'
import EditorSlate, {
  createEditorContent
} from '~client/mobilizations/widgets/__plugins__/content/components/editor-slate'

class EditorInput extends React.Component {

  render () {
    const { $formGroup: { value, onChange } } = this.context
   
    return (
      <EditorSlate
        content={value || ''}
        btnSaveLabel='Salvar rascunho'
        handleSave={(state) => {
          const raw = JSON.stringify(Raw.serialize(state))
          if (value !== raw) onChange(raw)
        }}
        staticToolbar={true}
        contentStyles={{
          backgroundColor: '#fff',
          color: '#666',
          padding: 10,
          border: '1px solid #eee',
          borderRadius: '2px'
        }}
      />
    )
  }
}

EditorInput.contextTypes = {
  $formGroup: PropTypes.object
}

export default ({
  fields: { name, subject, sender, content },
  ...formProps
}) => (
  <SettingsForm {...formProps}>
    <FormGroup controlId='nameId' {...name}>
      <ControlLabel>Nome da campanha</ControlLabel>
      <FormControl placeholder='Pela criação de uma delegacia de desaparecidos' />
    </FormGroup>
    <FormGroup controlId='subjectId' {...subject}>
      <ControlLabel maxLength={140}>Assunto do email</ControlLabel>
      <FormControl
        placeholder={'Faça um texto curto capaz'+
        ' de motivar outras pessoas a se unirem a sua'}
      />
    </FormGroup>
    <FormGroup controlId='senderId' {...sender}>
      <ControlLabel>Remetente</ControlLabel>
      <FormControl placeholder='Remetente' />
      <HelpBlock>{'Ex.: Nome <email@provedor.com>'}</HelpBlock>
    </FormGroup>
    <FormGroup controlId='contentId' {...content}>
      <ControlLabel>Conteúdo</ControlLabel>
      <EditorInput />
    </FormGroup>
  </SettingsForm>
)
