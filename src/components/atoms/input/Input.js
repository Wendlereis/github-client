import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: 0;
  padding: 10px 15px;
  border: 1px solid #e0e0e0e0;
  background-color: #ffffff;
  font-size: 14px;
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.87);

  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px 0px #52bdb2;
  }

  &::placeholder {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.33);
  }
`

export default function Input(props) {
  return <StyledInput {...props} />
}
