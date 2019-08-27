import React from 'react'
import { storiesOf } from '@storybook/react'

import Commit from './Commit'

const commit = {
  commit: {
    message: 'Merge branch hotfix/redux-dev-tools'
  },
  author: {
    avatar_url: 'https://avatars1.githubusercontent.com/u/6570553?v=4',
    login: 'Wendlereis'
  }
}

storiesOf('Commit', module).add('default', () => <Commit commit={commit} />)
