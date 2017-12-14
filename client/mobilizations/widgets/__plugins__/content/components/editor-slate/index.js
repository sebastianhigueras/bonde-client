import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import Plain from 'slate-plain-serializer'
import {
  SlateEditor, SlateToolbar, SlateContent,
  AlignmentPlugin, AlignmentButtonBar,
  BoldPlugin, BoldButton,
  ColorPlugin, ColorButton, ColorStateModel,
  EmbedPlugin, EmbedButton,
  FontFamilyPlugin, FontFamilyDropdown,
  FontSizePlugin, FontSizeInput,
  GridPlugin, GridButtonBar,
  ImagePlugin, ImageButton,
  ItalicPlugin, ItalicButton,
  LinkPlugin, LinkButton,
  ListPlugin, ListButtonBar,
  StrikethroughPlugin, StrikethroughButton,
  UnderlinePlugin, UnderlineButton
} from 'slate-editor'

import DefaultServerConfig from '~server/config'
import { Loading } from '~client/components/await'
import { ActionButton, FooterEditor, Layer } from '~client/mobilizations/widgets/__plugins__/content/components'

import styles from './styles'

if (require('exenv').canUseDOM) require('./index.scss')

const fontSizePluginOptions = { initialFontSize: 16 }
const colorPluginOptions = new ColorStateModel().rgba({ r: 100, g: 100, b: 100, a: 1 }).gen()

const plugins = [
  AlignmentPlugin(),
  BoldPlugin(),
  ColorPlugin(),
  EmbedPlugin(),
  FontFamilyPlugin(),
  FontSizePlugin(fontSizePluginOptions),
  GridPlugin(),
  ImagePlugin(),
  ItalicPlugin(),
  LinkPlugin(),
  ListPlugin(),
  StrikethroughPlugin(),
  UnderlinePlugin()
]

const classNames = {
  button: 'btn btn-primary not-rounded border border-gray',
  dropdown: 'select col-3 inline-block mx1 not-rounded',
  input: 'input col-3 inline-block mr1',
  lastButton: 'btn btn-primary not-rounded border border-gray linebreak'
}

class EditorSlate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false,
      loading: false
    }
  }

  render () {
    const { content, handleSave, handleDelete, readOnly, toolbarStyles, contentStyles } = this.props
    const initialState = JSON.parse(content)
    return (
      <div className='widgets--content-plugin'>
        <SlateEditor plugins={plugins} initialState={initialState} style={{ color: '#fff' }}>
          <SlateToolbar style={{
            ...styles.toolbar,
            display: this.state.editing ? 'block' : 'none',
            ...toolbarStyles
          }}>
            <BoldButton className={classNames.button} />
            <ItalicButton className={classNames.button} />
            <UnderlineButton className={classNames.button} />
            <StrikethroughButton className={classNames.button} />
            <AlignmentButtonBar className={classNames.button} />
            <LinkButton className={classNames.button} />
            <ListButtonBar className={classNames.button} />
            <FontFamilyDropdown className={classNames.dropdown} style={styles.dropdown} />
            <FontSizeInput className={classNames.input} {...fontSizePluginOptions} style={styles.input} />
            <ImageButton className={classNames.button} signingUrl={`${DefaultServerConfig.apiUrl}/uploads`} />
            <ColorButton className={classNames.button} initialState={colorPluginOptions} pickerDefaultPosition={{ x: 0, y: 17 }} />
            <GridButtonBar className={classNames.button} />
            <EmbedButton className={classNames.button} />
          </SlateToolbar>

          <SlateContent
            wrapperStyle={{ position: 'relative', zIndex: this.state.editing ? 4 : 'inherit' }}
            style={{ minHeight: 150, ...contentStyles }}
            onFocus={() => {
              if (!readOnly) this.setState({ editing: true })
            }}
            className={!readOnly ? 'editable' : ''}
            readOnly={readOnly}
          />

          <FooterEditor>
            <ActionButton
              editing={this.state.editing}
              title='Remover'
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0
              }}
              className='mt2'
              onClick={() => {
                handleDelete()
              }}
            >
              <i className='fa fa-trash' />
            </ActionButton>
            <ActionButton
              editing={this.state.editing}
              className='mt2 right-align'
              onClick={value => {
                this.setState({ editing: false })
                handleSave(value)
              }}
            >
              <FormattedMessage
                id='c--editor-slate.button-save.text'
                defaultMessage='Salvar'
              />
            </ActionButton>
          </FooterEditor>
          <Layer
            editing={this.state.editing}
            onClick={value => {
              this.setState({ editing: false })
              handleSave(value)
            }}
          />
        </SlateEditor>
        {this.state.loading && <Loading />}
      </div>
    )
  }
}

EditorSlate.defaultProps = {
  handleSave: () => {}
}

export const createEditorContent = content => JSON.stringify(
  Plain.deserialize(content).toJSON()
)

export default EditorSlate
