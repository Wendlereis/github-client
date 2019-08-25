import React from 'react'
import styled from 'styled-components'

import { Form } from '../../organisms/form'

const StyledLogin = styled.section`
  background-color: #f5f6f7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default function Login() {
  return (
    <StyledLogin>
      <Form />
    </StyledLogin>
  )
}
