import React from 'react'
import Details from '../../components/Details'
import renderer from 'react-test-renderer'
import {
  Context,
  InitialState
} from '../../store'

jest.mock('../../components/Tools', () => {
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
    selectedValue: 0,
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

describe('Details componente', () => {
  it('renders initial screen', () => {
    const tree = renderer.create(
      <Context.Provider value={value}>
        <Details />
      </Context.Provider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
