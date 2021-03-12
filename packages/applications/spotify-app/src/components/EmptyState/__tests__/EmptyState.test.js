import React from 'react'
import { render } from '@testing-library/react'
import EmptyState from '..'

describe('Tests for EmptyState component', () => {
  it('renders EmptyState component', async () => {
    const component = render(<EmptyState />)

    expect(component).toMatchSnapshot()
  })
})
