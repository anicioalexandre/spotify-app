import React from 'react'
import { render } from '@testing-library/react'
import LoadingState from '..'

describe('Tests for LoadingState component', () => {
  it('renders LoadingState component', async () => {
    const component = render(<LoadingState />)

    expect(component).toMatchSnapshot()
  })
})
