import PropTypes from 'prop-types'
import React from 'react'
import Box from './box'

var styles = require('exenv').canUseDOM ? require('./info.scss') : {}

const Info = ({ title, children }) => (
  <Box
    title={title}
    styles={styles}
    icon='info-circle'
  >
    {children}
  </Box>
)

Info.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default Info
