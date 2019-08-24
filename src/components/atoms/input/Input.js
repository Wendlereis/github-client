import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: 0;
  padding: 10px 15px;
  background-color: #e3e3e3;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px 0px rgba(255, 90, 73, 1);
  }
`

export default function Input(props) {
  return <StyledInput {...props} />
}
