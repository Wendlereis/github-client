import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Button', () => {
  it('should render a default button', () => {
    const component = shallow(<Button>This is a default button</Button>)

    expect(component).toMatchSnapshot()
  })

  it('should render a primary button', () => {
    const component = shallow(<Button primary>This is a primary button</Button>)

    expect(component).toMatchSnapshot()
  })
})
