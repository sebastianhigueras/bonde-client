import { combineReducers } from 'redux'

// Redux Form
import { reducer as form } from 'redux-form'
import { normalizer as creditCardForm } from '~client/subscriptions/forms/credit-card-form'
import { normalizer as recurringForm } from '~client/subscriptions/forms/recurring-form'
import { normalizer as communityRecipientForm }
from '~routes/admin/authenticated/sidebar/community-settings/recipient/page'

// Reapop
import { reducer as notificationsReducer } from 'reapop'

// Application
import auth from '~client/account/redux/reducers'
import wait from '~client/components/await/redux/reducers'
import mobilizations from '~client/mobrender/redux/reducers'
import community from '~client/community/reducers'
import colorPicker from '~client/components/color-picker/reducers'
import subscriptions from '~client/subscriptions/redux/reducers'
import intl from '../intl/redux/reducers'

const initialState = {
  host: '',
  protocol: ''
}

const sourceRequest = (state = initialState, action) => state

// Only combine reducers needed for initial render, others will be
// added async
export default function createReducer (asyncReducers) {
  return combineReducers({
    sourceRequest,
    form: form.normalize({
      creditCardForm,
      recurringForm,
      communityRecipientForm
    }),
    notifications: notificationsReducer(),
    auth,
    wait,
    mobilizations,
    community,
    colorPicker,
    subscriptions,
    intl,
    ...asyncReducers
  })
}
