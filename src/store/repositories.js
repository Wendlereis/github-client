import RepositoriesService from '../services/repositores'
import { loadSuccess as loadUserSuccess } from './user'

import { history } from '../routes'

const LOAD = 'repositories/LOAD'

export default function repositoriesReducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state, repositories: action.repositores }
    default:
      return state
  }
}

export function loadRequest(user) {
  const repositoriesService = new RepositoriesService()

  return async dispatch => {
    const { data } = await repositoriesService.get(user)
    const [repository] = data

    dispatch(loadSuccess(data))
    dispatch(loadUserSuccess(repository.owner))

    history.push('/home')
  }
}

function loadSuccess(repositores) {
  return {
    type: LOAD,
    repositores
  }
}
