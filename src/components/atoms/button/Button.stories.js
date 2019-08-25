import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Button', module)
  .add('default', () => <Button>default button</Button>)
  .add('primary', () => <Button primary>primary button</Button>)
  .add('disabled', () => <Button disabled>disabled button</Button>)
