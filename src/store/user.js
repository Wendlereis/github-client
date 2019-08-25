const LOAD = 'user/LOAD'

export default function userReducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state, user: action.user }
    default:
      return state
  }
}

export function loadSuccess(user) {
  return {
    type: LOAD,
    user
  }
}
