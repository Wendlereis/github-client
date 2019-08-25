import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { HomeTemplate } from '../../templates/home'

export default function Home() {
  const repositories = useSelector(
    state => state.repositoriesReducer.repositories
  )

  return (
    <HomeTemplate>
      {repositories.map(repo => (
        <Link key={repo.id} to={`/repo/${repo.name}`}>
          <li>{repo.name}</li>
        </Link>
      ))}
    </HomeTemplate>
  )
}
