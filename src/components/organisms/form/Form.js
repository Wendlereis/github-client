import React from 'react'
import styled from 'styled-components'
import { Button } from '../../atoms/button'
import { Field } from '../../molecules/field'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

export default function Form() {
  return (
    <StyledForm>
      <Field label="Username" />
      <Button primary>LOGIN</Button>
    </StyledForm>
  )
}
