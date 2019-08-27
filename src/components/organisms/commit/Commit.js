import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Avatar } from '../../atoms/avatar'
import { Label } from '../../atoms/label'

const StyledCommit = styled.section`
  display: flex;
  align-items: center;
  padding: 16px;
  height: 80px;
  border: 1px solid #e0e0e0e0;
  margin-bottom: 12px;
`

const AvatarWrapper = styled.section`
  width: 60px;
  height: 60px;
`

const MessageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  label: {
    margin-top: 8px;
  }
`

export default function Commit({ commit }) {
  return (
    <StyledCommit>
      <AvatarWrapper>
        <Avatar
          src={
            (commit.author && commit.author.avatar_url) ||
            'https://avatars.dicebear.com/v2/identicon/.svg'
          }
          alt="commit author"
        />
      </AvatarWrapper>
      <MessageWrapper>
        <Label text={commit.commit.message} />
        <Label text={(commit.author && commit.author.login) || 'github user'} />
      </MessageWrapper>
    </StyledCommit>
  )
}

Commit.propTypes = {
  commit: PropTypes.object
}
