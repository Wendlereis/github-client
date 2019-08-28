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
        font-size: 40px;

        @media (min-width: 768px) {
          font-size: 44px;
        }
      `
    )
  }}

  ${props => {
    return (
      props.subtitle &&
      css`
        font-size: 16px;
        text-transform: none;

        @media (min-width: 768px) {
          font-size: 20px;
        }
      `
    )
  }}

  ${props => {
    return (
      props.heading &&
      css`
        font-size: 20px;

        @media (min-width: 768px) {
          font-size: 24px;
        }
      `
    )
  }}

  ${props => {
    return (
      props.subheading &&
      css`
        font-size: 16px;
        text-transform: none;

        @media (min-width: 768px) {
          font-size: 20px;
        }
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
