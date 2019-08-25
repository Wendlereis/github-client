import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from './Label'

storiesOf('Label', module)
  .add('default', () => <Label text="label" />)
  .add('title', () => <Label text="it's a title" title />)
  .add('subtitle', () => <Label text="it's a subtitle" subtitle />)
  .add('heading', () => <Label text="it's a heading" heading />)
  .add('subheading', () => <Label text="it's a body" body />)
