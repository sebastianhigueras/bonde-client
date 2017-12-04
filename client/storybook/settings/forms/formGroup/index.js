import React from 'react'
import { controlLabelStyle, formGroupStyle } from './styles'
import HelpBlock from '../helpBlock'

const ControlLabel = ({ children, htmlFor }) => (
  <label style={controlLabelStyle} htmlFor={htmlFor}>
    {children}
  </label>
)

export default (InputComponent) => ({
  id,
  touched,
  error,
  name,
  i18n,
  label,
  helpText,
  ...inputProps
}) => {
  return (
    <div style={formGroupStyle}>
      {label && (<ControlLabel htmlFor={`${name}-id`}>{label}</ControlLabel>)}
      {helpText && <HelpBlock level='warning'>{helpText}</HelpBlock>}
      <InputComponent
        id={`${name}-id`}
        name={name}
        {...inputProps}
      />
      {touched && error && (
        <HelpBlock level='error'>{i18n(error)}</HelpBlock>
      )}
    </div>
  )
}