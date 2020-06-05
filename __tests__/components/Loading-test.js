import React from 'react'
import Loading from '../../components/Loading'
import renderer from 'react-test-renderer'

describe('Loading Component', () => {
  it('renders screen', () => {
    const tree = renderer.create(<Loading />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
