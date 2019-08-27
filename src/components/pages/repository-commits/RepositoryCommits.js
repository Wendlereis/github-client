import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import {
  loadCommitsRequest,
  filterCommitsRequest
} from '../../../store/commits'

export default function RepositoryCommits({ match }) {
  const dispatch = useDispatch()
  const commits = useSelector(store => store.commitsReducer.commits)

  useEffect(() => {
    const { username, repository } = match.params
    dispatch(loadCommitsRequest(username, repository))
  }, [])

  function searchCommits(event) {
    const { value } = event.target

    const filteredCommits = commits.filter(commit =>
      commit.commit.message.includes(value)
    )

    dispatch(filterCommitsRequest(filteredCommits))
  }

  return (
    <section>
      <h1>{match.params.repository}</h1>
      <input onChange={searchCommits} />
      <ul>
        {commits &&
          commits.map(commit => (
            <li key={commit.sha}>{commit.commit.message}</li>
          ))}
      </ul>
    </section>
  )
}

RepositoryCommits.propTypes = {
  match: PropTypes.object
}
