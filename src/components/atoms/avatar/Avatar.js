import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFigure = styled.img`
  border-radius: 50%;
  border: 5px solid #fafafa;
  height: inherit;
  box-sizing: border-box;
`

export default function Avatar(props) {
  return <StyledFigure {...props} />
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired
}
