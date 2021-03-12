import React from 'react'
import { screen } from '@testing-library/dom'

import renderWithRedux from '../../../helpers/renderWithRedux'
import renderWithRouter from '../../../helpers/renderWithRouter'
import { recentSearchesMock } from '../__mocks__/recentSearchesMock'
import Home from '..'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({ push: mockHistoryPush })
}))

const localStorageMock = (function () {
  let storage = recentSearchesMock
  return {
    getItem: function (key) {
      return JSON.stringify(storage[key])
    },
    setItem: function (key, value) {
      storage[key] = value.toString()
    },
    removeItem: function (key) {
      delete storage[key]
    },
    clear: function () {
      storage = {}
    }
  }
})()
Object.defineProperty(window, 'localStorage', { value: localStorageMock })

describe('Tests for Home page', () => {
  it('renders Home page component', async () => {
    const component = renderWithRedux(renderWithRouter(<Home />))
    expect(component).toMatchSnapshot()
  })
  it('renders three cards as an result of the localStorage content', async () => {
    const { container } = renderWithRedux(renderWithRouter(<Home />))
    expect(container.querySelectorAll('a')).toHaveLength(3)
  })
  it('renders the first card correctly', async () => {
    renderWithRedux(renderWithRouter(<Home />))
    const [firstAlbumCard] = await screen.findAllByTestId('album-track-card')

    const { name, image, artistName } = recentSearchesMock.last_results[0]

    expect(firstAlbumCard.primaryLabel).toBe(name)
    expect(firstAlbumCard.secondaryLabel).toBe(artistName)
    expect(firstAlbumCard.imageSrc).toBe(image)
  })
  it('renders the third card correctly', async () => {
    renderWithRedux(renderWithRouter(<Home />))
    const [, , thirdTrackCard] = await screen.findAllByTestId(
      'album-track-card'
    )

    const { name, image, artistName } = recentSearchesMock.last_results[2]

    expect(thirdTrackCard.primaryLabel).toBe(name)
    expect(thirdTrackCard.secondaryLabel).toBe(artistName)
    expect(thirdTrackCard.imageSrc).toBe(image)
  })
  it('have calls a route change inside the link', async () => {
    const { container } = renderWithRedux(renderWithRouter(<Home />))

    const firstCardHref = container.querySelector('a').href
    const { albumId } = recentSearchesMock.last_results[0]
    expect(firstCardHref).toMatch(albumId)
  })
})
