import React from 'react'
import Overview from '../../components/Overview'
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

const article = {
  author: 'Mockauthor',
  publishedAt: 'MockpublishedAt',
  title: 'Mocktitle',
  urlToImage: 'MockurlToImage',
  description: 'Mockdescription',
  content: 'Mockcontent',
  url: 'Mockurl'
}

const value = {
  dispatch: jest.fn(),
  store: {
    ...InitialState,
    data: [{ ...article }]
  }
}

describe('Overview componente', () => {
  it('renders initial screen', () => {
    const tree = renderer.create(
      <Context.Provider value={value}>
        <Overview article={article} id={0} />
      </Context.Provider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
