import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Header } from '../../organisms/header'

const StyledHome = styled.section`
  background-color: #f5f6f7;
  min-height: 100vh;
`

export default function Home({ children }) {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <StyledHome>
      <Header user={user} />
      {children}
    </StyledHome>
  )
}

Home.propTypes = {
  children: PropTypes.any
}
