import React from 'react'
import { shallow } from 'enzyme'
import Avatar from './Avatar'

describe('Avatar', () => {
  it('should render correctly with an image', () => {
    const component = shallow(
      <Avatar src="https://avatars.dicebear.com/v2/identicon/.svg" />
    )

    expect(component).toMatchSnapshot()
  })
})
