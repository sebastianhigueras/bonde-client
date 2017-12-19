import PropTypes from 'prop-types'
import React from 'react'
import { Route } from 'react-router-dom'
import { TechnicalIssues } from '~client/components/error/index.js'
import { SettingsPageLayout, SettingsPageContentLayout } from '~client/components/layout'
import { SettingsMenu } from '~client/community/components'
import InfoPage from './info/page.connected'
import InvitePage from './invite/page.connected'
import DomainPage from './domain/page.connected'
import DomainCreatePage from './domain-create/page.connected'
import MailchimpPage from './mailchimp/page.connected'
import RecipientPage from './recipient/page.connected'
import ReportPage from './report/page.connected'
import TwilioPage from './twilio/page.connected'

const RouteRoot = ({ path, component }) => (
  <Route exact path={`/community${path}`} component={component} />
)

const SettingsContainer = ({ location }) => (
  <SettingsPageLayout>
    <SettingsMenu location={location} />
    <SettingsPageContentLayout>
      <RouteRoot path='/info' component={InfoPage} />
      <RouteRoot path='/invite' component={InvitePage} />
      <RouteRoot path='/mailchimp' component={MailchimpPage} />
      <RouteRoot path='/recipient' component={RecipientPage} />
      <RouteRoot path='/report' component={ReportPage} />
      <RouteRoot path='/twilio' component={TwilioPage} />
      <RouteRoot path='/domain' component={DomainPage} />
      <RouteRoot path='/domain/add' component={DomainCreatePage} />
      <Route component={TechnicalIssues} />
    </SettingsPageContentLayout>
  </SettingsPageLayout>
)

SettingsContainer.propTypes = {
  location: PropTypes.object
}

export default SettingsContainer
