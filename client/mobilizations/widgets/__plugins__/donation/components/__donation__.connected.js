import { connect } from 'react-redux'
import AnalyticsEvents from '~client/mobilizations/widgets/utils/analytics-events'
import { asyncDonationTransactionCreate } from '../action-creators'
import { Donation } from './__donation__'

const mapActionsToProps = (dispatch) => ({
  handleDonationTransactionCreate: ({
    mobilization,
    widget,
    selectedValue,
    selectedPaymentType,
    onSucess,
    onError
  }) => new Promise((resolve, reject) => {
    const paymentType = widget.settings.payment_type
    const recurringPeriod = widget.settings.recurring_period
    const mainColor = widget.settings.main_color
      ? widget.settings.main_color
      : '#43a2cc'

    const checkout = new PagarMeCheckou.Checkou({
      encryption_key: process.env.PAGARME_KEY || 'setup env var',
      success: (data) => {
        data.subscription = paymentType === 'users_choice'
          ? (selectedPaymentType !== 'unique')
          : data.subscription = (paymentType !== 'unique')

        data.recurring_period = recurringPeriod
        data.mobilization_id = mobilization.id
        data.widget_id = widget.id
        data.amount = widget.settings['donation_value' + selectedValue] + '00'

        dispatch(asyncDonationTransactionCreate(data))
          .then(resolve)
          .catch(reject)
      },
      error: (err) => { console.error(err) }
    })

    const params = {
      createToken: 'false',
      amount: widget.settings['donation_value' + selectedValue] + '00',
      customerData: 'true',
      paymentMethods: widget.settings.payment_methods === 'true' ? 'credit_card,boleto' : 'credit_card',
      uiColor: mainColor,
      paymentButtonText: widget.settings.button_text
    }

    AnalyticsEvents.donationSetValue()

    checkout.open(params)
  })
})

export default connect(undefined, mapActionsToProps)(Donation)
