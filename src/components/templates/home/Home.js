import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Header } from '../../organisms/header'

const StyledHome = styled.section`
  background-color: #f5f6f7;
  height: 100vh;
`

export default function Home({ children }) {
  const user = useSelector(store => store.userReducer.user)
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
