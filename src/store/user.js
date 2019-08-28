import UserService from '../services/user'
import { history } from '../routes'

const LOAD = 'user/LOAD'

export default function userReducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state, user: action.user }
    default:
      return state
  }
}

export function loadUserRequest(user) {
  const userService = new UserService()

  return async dispatch => {
    const { data } = await userService.get(user)

    localStorage.setItem('user', JSON.stringify(data))
    dispatch(loadUserSuccess(data))

    history.push(`/${user}/home`)
  }
}

function loadUserSuccess(user) {
  return {
    type: LOAD,
    user
  }
}
