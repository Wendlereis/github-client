import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Label } from '../../atoms/label'
import { Input } from '../../atoms/input'

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  
  Input {
    margin-top 8px;
  }
`

export default function Field({ label }) {
  return (
    <StyledField>
      <Label text={label} />
      <Input />
    </StyledField>
  )
}

Field.propTypes = {
  label: PropTypes.string.isRequired
}
