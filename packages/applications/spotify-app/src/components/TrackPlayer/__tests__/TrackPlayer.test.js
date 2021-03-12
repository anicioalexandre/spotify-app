import React from 'react'
import { render } from '@testing-library/react'
import TrackPlayer from '..'

describe('Tests for TracksPlayer component', () => {
  it('renders TrackPlayer component', async () => {
    const component = render(<TrackPlayer />)

    expect(component).toMatchSnapshot()
  })
})
