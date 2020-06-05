import React from 'react'
import Tools from '../../components/Tools'
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
  store: {
    ...InitialState,
    data: [
      {
        author: 'Mockauthor',
        publishedAt: 'MockpublishedAt',
        title: 'Mocktitle',
        urlToImage: 'MockurlToImage',
        description: 'Mockdescription',
        content: 'Mockcontent',
        url: 'Mockurl'
      }
    ]
  }
}

describe('Tools componente', () => {
  it('renders initial screen', () => {
    const tree = renderer.create(
      <Context.Provider value={value}>
        <Tools />
      </Context.Provider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
