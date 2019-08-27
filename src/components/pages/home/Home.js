import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { HomeTemplate } from '../../templates/home'
import { Card } from '../../molecules/card'

import { loadRepositoriesRequest } from '../../../store/repositories'

const CardWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 24px;
`

const StyledLink = styled(Link)`
  width: calc(50% - 24px);
  margin: 12px;
  text-decoration: none;
`

export default function Home({ match }) {
  const dispatch = useDispatch()

  useEffect(() => {
    const { username } = match.params
    dispatch(loadRepositoriesRequest(username))
  }, [])

  const repositories = useSelector(
    state => state.repositoriesReducer.repositories
  )

  return (
    <HomeTemplate>
      <CardWrapper>
        {repositories &&
          repositories.map(repo => (
            <StyledLink
              key={repo.id}
              to={`/${match.params.username}/repo/${repo.name}/commits`}
            >
              <Card repository={repo} />
            </StyledLink>
          ))}
      </CardWrapper>
    </HomeTemplate>
  )
}

Home.propTypes = {
  match: PropTypes.object
}
