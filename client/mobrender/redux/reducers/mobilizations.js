import * as t from '../action-types'

export const initialState = {
  isLoaded: false,
  fetching: false,
  saving: false,
  data: [],
  currentId: undefined,
  menuActiveIndex: undefined,
  error: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_MOBILIZATION_REQUEST:
    case t.UPDATE_MOBILIZATION_REQUEST:
      return {...state,
        saving: true
      }
    case t.ADD_MOBILIZATION_SUCCESS:
      return {...state,
        saving: false,
        data: [action.payload, ...state.data],
        currentId: action.payload.id
      }
    case t.UPDATE_MOBILIZATION_SUCCESS:
      return {...state,
        saving: false,
        data: state.data.map(m => m.id === action.payload.id ? action.payload : m)
      }
    case t.ADD_MOBILIZATION_FAILURE:
    case t.UPDATE_MOBILIZATION_FAILURE:
      return {...state,
        saving: false,
        error: action.payload
      }
    case t.FETCH_MOBILIZATIONS_REQUEST:
    case t.FILTER_MOBILIZATIONS_REQUEST:
      return {...state,
        fetching: true
      }
    case t.FETCH_MOBILIZATIONS_SUCCESS:
    case t.FILTER_MOBILIZATIONS_SUCCESS:
      return {...state,
        isLoaded: true,
        fetching: false,
        data: action.payload
      }
    case t.FETCH_MOBILIZATIONS_FAILURE:
    case t.FILTER_MOBILIZATIONS_FAILURE:
      return {...state,
        isLoaded: true,
        fetching: false,
        error: action.payload
      }
    case t.SELECT_MOBILIZATION:
      return {...state,
        currentId: action.payload
      }
    case t.TOGGLE_MOBILIZATION_MENU:
      return {...state,
        menuActiveIndex: action.payload === state.menuActiveIndex ? undefined : action.payload
      }
    default:
      return state
  }
}
