import React from 'react'
import { render } from '@testing-library/react'
import NotFound from '..'

describe('Tests for NotFound component', () => {
  it('renders NotFound component', async () => {
    const component = render(<NotFound />)

    expect(component).toMatchSnapshot()
  })
})
