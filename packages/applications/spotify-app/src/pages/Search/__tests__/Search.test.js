import React from 'react'
import { screen } from '@testing-library/dom'
import renderWithRedux from '../../../helpers/renderWithRedux'
import renderWithRouter from '../../../helpers/renderWithRouter'
import Search from '..'
import getTokenEndpoint from '../../../services/getTokenEndpoint'
import getSearchEndpoint from '../../../services/getSearchEndpoint'
import { QUERY_BEATLES_MOCK } from '../../../services/__mocks__/getSearchMock'

afterEach(() => {
  getTokenEndpoint.mockClear()
  getSearchEndpoint.mockClear()
})

jest.mock('../../../services/getTokenEndpoint')
getTokenEndpoint.mockResolvedValue('token')

jest.mock('../../../services/getSearchEndpoint')
getSearchEndpoint.mockResolvedValue(QUERY_BEATLES_MOCK)

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ query: 'Beatles' })
}))

describe('Tests for Search page', () => {
  const expectToCallTokenAndSearchEndPoints = () => {
    expect(getTokenEndpoint).toHaveBeenCalledTimes(1)
    expect(getSearchEndpoint).toHaveBeenCalledTimes(1)
  }

  it('renders six cards as an result for the "beatles" search', async () => {
    const { container } = renderWithRedux(renderWithRouter(<Search />))
    await screen.findAllByTestId('album-card') // await for mock function to be called
    expectToCallTokenAndSearchEndPoints()

    expect(container.querySelectorAll('a')).toHaveLength(6)
  })
  it('renders the first album card correctly', async () => {
    renderWithRedux(renderWithRouter(<Search />))
    const [firstAlbumCard] = await screen.findAllByTestId('album-card')
    expectToCallTokenAndSearchEndPoints()

    expect(firstAlbumCard.primaryLabel).toBe('Beatles For Sale (Remastered)')
    expect(firstAlbumCard.secondaryLabel).toBe('The Beatles')
    expect(firstAlbumCard.imageSrc).toBe(
      'https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25'
    )
  })
  it('renders the third track card correctly', async () => {
    renderWithRedux(renderWithRouter(<Search />))
    const [, , thirdTrackCard] = await screen.findAllByTestId('track-card')
    expectToCallTokenAndSearchEndPoints()

    expect(thirdTrackCard.primaryLabel).toBe('Come Together - Remastered 2009')
    expect(thirdTrackCard.secondaryLabel).toBe('The Beatles')
    expect(thirdTrackCard.imageSrc).toBe(
      'https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25'
    )
  })
})
