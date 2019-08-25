import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { HomeTemplate } from '../../templates/home'
import { Card } from '../../molecules/card'

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

export default function Home() {
  const repositories = useSelector(
    state => state.repositoriesReducer.repositories
  )

  return (
    <HomeTemplate>
      <CardWrapper>
        {repositories.map(repo => (
          <StyledLink key={repo.id} to={`/repo/${repo.name}`}>
            <Card repository={repo} />
          </StyledLink>
        ))}
      </CardWrapper>
    </HomeTemplate>
  )
}
