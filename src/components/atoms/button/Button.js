import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  padding: 10px 15px;
  border: 0;
  border-radius: 3px;
  background-color: #f0f0f0;
  color: #52bdb2;
  text-transform: uppercase;
  font-weight: 500;
  transition: all 0.5s;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #e0e0e0;
  }

  &:disabled {
    background: #d7d7d7;
    color: #ffffff;
    cursor: no-drop;

    &:hover {
      background: #d7d7d7;
      color: #ffffff;
    }
  }

  ${props => {
    return (
      props.primary &&
      css`
        background: #ff5a49;
        color: #ffffff;

        &:hover {
          background-color: #ff2c16;
        }
      `
    )
  }}
`
export default function Button(props) {
  return <StyledButton {...props} />
}

Button.propTypes = {
  primary: PropTypes.bool
}
