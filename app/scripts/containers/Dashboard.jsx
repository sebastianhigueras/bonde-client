import React from 'react'
import DashboardMenu from './../components/DashboardMenu.jsx'
import * as MobilizationActions from './../actions/MobilizationActions'
import { connect } from 'redux/react'
import { bindActionCreators } from 'redux'

@connect(state => ({
  mobilizations: state.mobilizations
}))

export default class Dashboard extends React.Component {
  componentDidMount(){
    const { dispatch } = this.props
    const actions = bindActionCreators(MobilizationActions, dispatch)
    actions.fetchMobilizations()
  }

  render(){
    const mobilization = this.props.mobilizations[0]
    return(mobilization ? this.renderDashboard(mobilization) : this.renderLoader())
  }

  renderDashboard(mobilization){
    return(
      <div className="flex flex-stretch">
        <DashboardMenu {...this.props} mobilization={mobilization} />
        {this.props.children &&
          React.cloneElement(this.props.children, {...this.props, mobilization: mobilization})}
      </div>
    )
  }

  renderLoader(){
    return(<div>Carregando...</div>)
  }
}
