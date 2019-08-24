import RepositoriesService from '../services/repositores'

const LOAD = 'repositories/LOAD'

export default function repositoriesReducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state, action }
    default:
      return state
  }
}

export function loadRequest(user) {
  const repositoriesService = new RepositoriesService()

  return async dispatch => {
    const response = await repositoriesService.get(user)
    dispatch(loadSuccess(response))
  }
}

function loadSuccess(repositores) {
  return {
    type: LOAD,
    repositores
  }
}
