import reactCookie from 'react-cookie'
import * as t from '../action-types'

// Dependency module
import * as authT from '~client/account/redux/action-types'

export const initialState = {
  loading: false,
  isLoaded: false,
  data: [],
  currentId: undefined,
  error: undefined,
  forcedSubmit: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case t.FETCH:
      return {
        ...state,
        loading: true
      }
    case t.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoaded: true,
        data: action.data
      }
    case t.FETCH_FAIL:
      return {
        ...state,
        loading: false,
        isLoaded: false,
        error: action.error
      }
    case t.ADD:
      return {
        ...state,
        data: [...state.data, action.community]
      }
    case t.EDIT:
      // update community in cache
      reactCookie.save('community', {
        community: {
          list: {
            currentId: action.community.id,
            data: [action.community]
          }
        }
      })
      return {
        ...state,
        data: state.data.map(
          c => c.id === action.community.id ? action.community : c
        )
      }
    case t.SELECT:
      if (state.currentId !== action.id) {
        reactCookie.save('community', {
          community: {
            list: {
              currentId: action.id,
              data: state.data.filter(c => c.id === action.id)
            }
          }
        })
      }
      return {
        ...state,
        currentId: action.id
      }
    case t.UNSET:
      return {
        ...state,
        currentId: null
      }
    case authT.LOGOUT_SUCCESS:
      // reset info to make redirect correctly
      return initialState

    case t.ASYNC_INVITE_REQUEST:
      return { ...state }
    case t.ASYNC_INVITE_SUCCESS:
      return { ...state }
    case t.ASYNC_INVITE_FAILURE:
      return { ...state, error: action.payload }

    case t.SET_FORCED_SUBMIT:
      return { ...state, forcedSubmit: action.payload }

    default:
      return state
  }
}
