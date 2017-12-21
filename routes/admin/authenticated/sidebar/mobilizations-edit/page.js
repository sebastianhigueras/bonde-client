import PropTypes from 'prop-types'
import React, { Component } from 'react'
// Global module dependencies
import { Loading } from '~client/components/await'
import { GoogleFontsLoader } from '~client/components/fonts'
import * as arrayUtil from '~client/utils/array'
import * as paths from '~client/paths'

import Mobilization from '~client/mobrender/components/mobilization.connected'

export class MobilizationsEditPage extends Component {
  componentDidMount () {
    const { match: { params }, mobilization } = this.props
    const promises = []

    !mobilization && promises.push(
      this.props.selectMobilization(params.mobilization_id)
    )

    if (this.props.mobilizationIsNeedReload) {
      promises.push(this.props.asyncFetchBlocks(params.mobilization_id))
      promises.push(this.props.asyncFetchWidgets(params.mobilization_id))
    }
    return Promise.all(promises)
  }

  componentWillReceiveProps (nextProps) {
    const { mobilization, blocksIsLoaded, blocks } = nextProps
    if (blocksIsLoaded && blocks.length === 0) {
      this.props.history.push(paths.mobilizationTemplatesChoose(mobilization))
    }
  }

  render () {
    const { mobilization, renderIsLoading } = this.props

    if (!renderIsLoading) {
      const fonts = [mobilization.header_font, mobilization.body_font].filter(arrayUtil.distinct)
      return (
        <div className='flex flex-auto overflow-hidden'>
          <Mobilization editable />
          <GoogleFontsLoader fonts={fonts} />
        </div>
      )
    }
    return <Loading />
  }
}

MobilizationsEditPage.propTypes = {
  mobilization: PropTypes.shape({
    id: PropTypes.number.isRequired,
    header_font: PropTypes.string,
    body_font: PropTypes.string
  }).isRequired,
  renderIsLoading: PropTypes.bool,
  blocks: PropTypes.array,
  blockIsLoaded: PropTypes.bool
}

export default MobilizationsEditPage
