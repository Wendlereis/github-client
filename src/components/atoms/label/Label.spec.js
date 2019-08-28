import React from 'react'
import { shallow } from 'enzyme'
import Label from './Label'

describe('Label', () => {
  it('should render correctly with a text', () => {
    const component = shallow(<Label text="myText" />)

    expect(component).toMatchSnapshot()
  })

  it('should render correctly with a text as a title', () => {
    const component = shallow(<Label title text="myText" />)

    expect(component).toMatchSnapshot()
  })

  it('should show repository name as a title', () => {
    const repoName = 'My Repository'
    const component = shallow(<Label title text={repoName} />)

    expect(component).toMatchSnapshot()
  })
})
