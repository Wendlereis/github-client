import RepositoriesService from '../services/repositores'

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

export function loadRepositoriesRequest(user) {
  const repositoriesService = new RepositoriesService()

  return async dispatch => {
    const { data } = await repositoriesService.get(user)
    dispatch(loadRepositoriesSuccess(data))

    history.push('/home')
  }
}

function loadRepositoriesSuccess(repositores) {
  return {
    type: LOAD,
    repositores
  }
}
