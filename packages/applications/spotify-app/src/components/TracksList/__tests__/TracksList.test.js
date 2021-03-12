import React from 'react'
import renderWithRedux from '../../../helpers/renderWithRedux'
import renderWithRouter from '../../../helpers/renderWithRouter'
import TracksList from '..'

const DATA_MOCK = [
  { trackName: 'Nome da faixa 1', trackDuration: '123', trackId: '1' },
  { trackName: 'Nome da faixa 2', trackDuration: '456', trackId: '2' },
  { trackName: 'Nome da faixa 3', trackDuration: '789', trackId: '3' }
]

describe('Tests for TracksList component', () => {
  it('renders TracksList component', async () => {
    const component = renderWithRedux(renderWithRouter(<TracksList />))

    expect(component).toMatchSnapshot()
  })
  it('should pass an array to the ds-ordered-list component', async () => {
    const { container } = renderWithRedux(
      renderWithRouter(<TracksList dataList={DATA_MOCK} />)
    )
    const orderedListData = container.querySelector('ds-ordered-list').dataList

    expect(orderedListData).toStrictEqual(DATA_MOCK)
  })
})
