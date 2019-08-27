import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Label } from '../../atoms/label'

const StyledTemplate = styled.section`
  background-color: #f5f6f7;
  min-height: 100vh;
`
const StyledTitle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  background-color: #52bdb2;
`
const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
`

export default function RepositoryCommits({ title, children }) {
  return (
    <StyledTemplate>
      <StyledTitle>
        <Label heading text={title} />
      </StyledTitle>
      <StyledContent>{children}</StyledContent>
    </StyledTemplate>
  )
}

RepositoryCommits.propTypes = {
  title: PropTypes.object,
  children: PropTypes.any
}
