import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from './Label'

storiesOf('Label', module)
  .add('default', () => <Label text="label" />)
  .add('title', () => <Label text="it's a title" title />)
  .add('subtitle', () => <Label text="it's a subtitle" subtitle />)
