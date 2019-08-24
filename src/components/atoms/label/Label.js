import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLabel = styled.label`
  font-family: menlo;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  text-transform: uppercase;
`

export default function Label({ text }) {
  return <StyledLabel>{text}</StyledLabel>
}

Label.propTypes = {
  text: PropTypes.string.isRequired
}
