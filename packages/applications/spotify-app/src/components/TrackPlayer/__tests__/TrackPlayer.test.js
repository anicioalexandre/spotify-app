import React from 'react'
import renderWithRedux from '../../../helpers/renderWithRedux'
import renderWithRouter from '../../../helpers/renderWithRouter'
import TrackPlayer from '..'

describe('Tests for TracksPlayer component', () => {
  it('renders TrackPlayer component', async () => {
    const component = renderWithRedux(renderWithRouter(<TrackPlayer />))

    expect(component).toMatchSnapshot()
  })
})
