import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from './Header'

const user = {
  avatar_url: 'https://avatars1.githubusercontent.com/u/6570553?v=4',
  name: 'Wendler Eis',
  bio: 'Front-end developer | ReactJs & AngularJs @iCasei'
}

storiesOf('Heafer', module).add('default', () => <Header user={user}/>)
