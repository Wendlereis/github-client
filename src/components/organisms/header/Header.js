import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Avatar } from '../../atoms/avatar'
import { Label } from '../../atoms/label'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-shadow: 0px 20px 16px -24px rgba(0, 0, 0, 0.75);
  background-color: #ffffff;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 24px;
  }
`

const AvatarWrapper = styled.section`
  height: 120px;

  @media (min-width: 768px) {
    height: 150px;
  }
`
const UserWrapper = styled.article`
  display: flex;
  flex-direction: column;

  label:nth-child(1) {
    color: #EF6758;
  }

  label:nth-child(2) {
    color: #22364F;
  }

  @media (min-width: 768px) {
    margin-left: 72px;
  }
`

export default function Header({ user }) {
  return (
    <StyledHeader>
      <AvatarWrapper>
        <Avatar src={user.avatar_url} />
      </AvatarWrapper>

      <UserWrapper>
        <Label title text={user.name} />
        <Label subtitle text={user.bio} />
      </UserWrapper>
    </StyledHeader>
  )
}

Header.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string
  })
}
