import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledLabel = styled.label`
  font-family: menlo;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  text-transform: uppercase;

  ${props => {
    return (
      props.title &&
      css`
        font-size: 44px;
      `
    )
  }}

  ${props => {
    return (
      props.subtitle &&
      css`
        font-size: 20px;
        text-transform: none;
      `
    )
  }}
`

export default function Label({ text, ...rest }) {
  return <StyledLabel {...rest}>{text}</StyledLabel>
}

Label.propTypes = {
  text: PropTypes.string.isRequired
}
