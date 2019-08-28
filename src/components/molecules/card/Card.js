import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GoRepo, GoStar, GoRepoForked } from 'react-icons/go'

import { Label } from '../../atoms/label'

const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #e0e0e0e0;
  background-color: #ffffff;
  min-height: 152px;
`

const Row = styled.article`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  svg {
    color: #22364F;
  }

  &:nth-child(1) {
    label {
      margin-left: 12px;
    }
  }

  &:nth-child(2) {
    flex: 1;
  }

  &:nth-child(3) {
    label {
      margin-left: 8px;
      margin-right: 12px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

export default function Card({ repository }) {
  return (
    <StyledCard>
      <Row>
        <GoRepo size={24} />
        <Label heading text={repository.name} />
      </Row>
      <Row>
        <Label subheading text={repository.description} />
      </Row>
      <Row>
        <GoStar size={18} />
        <Label text={repository.stargazers_count} />

        <GoRepoForked size={18} />
        <Label text={repository.forks_count} />
      </Row>
    </StyledCard>
  )
}

Card.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    stargazers_count: PropTypes.number.isRequired,
    forks_count: PropTypes.number.isRequired
  })
}
