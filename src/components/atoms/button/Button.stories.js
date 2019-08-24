import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Button', module)
  .add('normal', () => <Button>Hello Button</Button>)
  .add('primary', () => <Button primary>Hello Button</Button>)
