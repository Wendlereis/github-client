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
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
`

const StyledLink = styled(Link)`
  width: 100%;
  margin-bottom: 12px;
  text-decoration: none;

  @media (min-width: 768px) {
    width: calc(50% - 24px);
    margin: 12px;
  }
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
