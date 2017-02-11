import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'

import * as paths from '~client/paths'
import { PageTabLayout } from '~mobilizations/components'
import MobilizationBasicsForm from '~mobilizations/components/mobilization-basics-form'

const MobilizationsNewPage = props => (
  <PageTabLayout location={props.location}>
    <div className='page-add'>
      <h2 className='h1 mt0 mb3 center'>Qual o objetivo da sua mobilização?</h2>
      <MobilizationBasicsForm
        className='bg-white'
        onFinishSubmit={() => {
          const { mobilization } = props
          mobilization && browserHistory.push(
            paths.mobilizationTemplatesChoose(mobilization)
          )
        }}
        {...props}
      />
      <p className='lightgray center' style={{ fontSize: '.9rem', marginTop: '1.5rem' }}>
        Fique tranquil@ vc poderá editar depois se achar necessário.
      </p>
    </div>
  </PageTabLayout>
)

MobilizationsNewPage.propTypes = {
  mobilization: PropTypes.object.isRequired
}

export default MobilizationsNewPage
