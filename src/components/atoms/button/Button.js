import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  box-sizing: border-box;
  background: ${props => (props.primary ? 'palevioletred' : '#eaeaea')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: ${props => (props.primary ? '2px solid palevioletred' : 'none')};
  border-radius: 3px;
`
export default function Button(props) {
  return <StyledButton {...props} />
}

Button.propTypes = {
  primary: PropTypes.bool
}
