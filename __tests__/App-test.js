import React from 'react'
import App from '../App'
import renderer from 'react-test-renderer'

jest.mock('../components/Overview', () => {
  return {
    __esModule: true,
    Overview: true,
    default: () => {
      return <div />
    }
  }
})
jest.mock('../components/Details', () => {
  return (
    <div />
  )
})
jest.mock('../components/Back', () => {
  return (
    <div />
  )
})

describe('App Component', () => {
  it('renders screen', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
