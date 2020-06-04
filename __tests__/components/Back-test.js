import React from 'react'
import Back from '../../components/Back'
import renderer from 'react-test-renderer'
import {
  Context,
  InitialState
} from '../../store'

jest.mock('../../components/Icon', () => {
  return {
    __esModule: true,
    default: () => {
      return <div />
    }
  }
})

const value = {
  dispatch: jest.fn(),
  store: InitialState
}

describe('Back componente', () => {
  it('renders screen', () => {
    const tree = renderer.create(
      <Context.Provider value={value}>
        <Back />
      </Context.Provider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
