import CommitsService from '../services/commit'

const LOAD = 'commits/LOAD'

export default function userReducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state, commits: action.commits }
    default:
      return state
  }
}

export function loadCommitsRequest(user, repository) {
  const commitsService = new CommitsService()

  return async dispatch => {
    const { data } = await commitsService.get(user, repository)
    dispatch(loadCommitsSuccess(data))
  }
}

export function filterCommitsRequest(filterCommits) {
  return dispatch => {
    dispatch(loadCommitsSuccess(filterCommits))
  }
}

function loadCommitsSuccess(commits) {
  return {
    type: LOAD,
    commits
  }
}
