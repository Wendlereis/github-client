import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { Button } from '../../atoms/button'
import { Field } from '../../molecules/field'

import { loadRequest } from '../../../store/repositories'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

export default function Form() {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  function onUsernameChange({ target: { value } }) {
    setUsername(value)
  }

  function handleLoginClick() {
    dispatch(loadRequest(username))
  }

  function hasUsername() {
    return !username
  }

  return (
    <StyledForm>
      <Field
        label="Username"
        onChange={onUsernameChange}
        value={username}
        placeholder="coolest developer"
      />
      <Button
        primary
        type="button"
        onClick={handleLoginClick}
        disabled={hasUsername()}
      >
        LOGIN
      </Button>
    </StyledForm>
  )
}
