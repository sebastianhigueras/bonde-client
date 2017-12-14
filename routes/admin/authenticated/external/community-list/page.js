import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Background } from '~client/components/layout'
import * as paths from '~client/paths'
import { FormattedMessage } from 'react-intl'
import { Loading } from '~client/components/await'
import { ListItem } from '~client/community/components'

class CommunityListPage extends Component {
  componentDidMount () {
    this.props.asyncFetch()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isLoaded && nextProps.communities.length === 0) {
      this.props.history.push(paths.communityAdd())
    }
  }

  onClickItem (id) {
    // Save selected community into browser's localStorage
    window.localStorage.setItem('community', JSON.stringify({
      list: {
        data: [this.props.communities.filter(c => c.id === id)[0]],
        currentId: id
      }
    }))
    this.props.select(id)
    this.props.history.push(paths.mobilizations())
  }

  render () {
    const { image, isLoading, isLoaded, communities, user } = this.props

    return isLoading || user === undefined ? <Loading /> : (
      <Background image={image} alignment={{ x: 'center', y: 'top' }}>
        <div className='col-12'>
          <h1>
            <FormattedMessage
              id='page--community-list.title'
              defaultMessage='Olá {name},'
              values={{ name: user.firstName || user.first_name }}
            />
          </h1>
          <h2>
            <FormattedMessage
              id='page--community-list.subtitle'
              defaultMessage='Escolha uma das suas comunidades'
            />
          </h2>
          {isLoaded ? (
            <div className='rounded bg-white'>
              {communities && communities.map((community, key) => (
                <ListItem
                  key={`list-item-${key}`}
                  community={community}
                  onClick={this.onClickItem.bind(this)}
                />
              ))}
            </div>
          ) : null}
          <p className='white center'>
            <FormattedMessage
              id='page--community-list.or'
              defaultMessage='or {link}'
              values={{
                link: (
                  <Link to={paths.communityAdd()}>
                    <FormattedMessage
                      id='page--community-list.new'
                      defaultMessage='Crie uma nova comunidade'
                    />
                  </Link>
                )
              }}
            />
          </p>
        </div>
      </Background>
    )
  }
}

CommunityListPage.propTypes = {
  isLoaded: PropTypes.bool,
  isLoading: PropTypes.bool,
  communities: PropTypes.array,
  user: PropTypes.object,
  // Actions
  select: PropTypes.func.isRequired
}

export default CommunityListPage
