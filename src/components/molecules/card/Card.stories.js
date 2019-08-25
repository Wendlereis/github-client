import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from './Card'

const repository = {
  name: 'Repository',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
  stargazers_count: 10,
  forks_count: 10
}

storiesOf('Card', module).add('default', () => <Card repository={repository} />)
