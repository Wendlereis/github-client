import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import {
  loadCommitsRequest,
  filterCommitsRequest
} from '../../../store/commits'
import { RepositoryCommitsTemplate } from '../../templates/repository-commits'
import { Commit } from '../../organisms/commit'
import { Input } from '../../atoms/input'

const StyledList = styled.ul`
  width: 100%;
  padding: 0;
`

export default function RepositoryCommits({ match }) {
  const dispatch = useDispatch()
  const commits = useSelector(store => store.commitsReducer.commits)

  useEffect(() => {
    const { username, repository } = match.params
    dispatch(loadCommitsRequest(username, repository))
  }, [])

  function searchCommits(event) {
    const { value } = event.target

    const filteredCommits = commits.filter(commit => {
      return commit.commit.message.includes(value)
    })

    dispatch(filterCommitsRequest(filteredCommits))
  }

  return (
    <RepositoryCommitsTemplate title={match.params.repository}>
      <Input onChange={searchCommits} placeholder="type commit name" />
      <StyledList>
        {commits &&
          commits.map(commit => <Commit key={commit.sha} commit={commit} />)}
      </StyledList>
    </RepositoryCommitsTemplate>
  )
}

RepositoryCommits.propTypes = {
  match: PropTypes.object
}
