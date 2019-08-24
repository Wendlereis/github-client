const LOAD_REPOSITORIES = 'github-client/repositories/LOAD_REPOSITORIES'

export default function repositoriesReducer(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state
  }
}

export function loadRepositories() {
  return { type: LOAD_REPOSITORIES }
}
