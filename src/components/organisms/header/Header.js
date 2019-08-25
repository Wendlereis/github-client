import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Avatar } from '../../atoms/avatar'
import { Label } from '../../atoms/label'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 24px;
  box-shadow: 0px 20px 16px -24px rgba(0, 0, 0, 0.75);
  background-color: #ffffff;
`

const AvatarWrapper = styled.section`
  height: 150px;
`
const UserWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-left: 72px;
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
