import React from 'react'
import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/react'
import SearchInput from '..'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ query: 'texto%20com%20espaços' }),
  useHistory: () => ({ push: mockHistoryPush })
}))

describe('Tests for SearchInput component', () => {
  it('calls history.push function when hitting enter inside the input', async () => {
    const { container } = render(<SearchInput />)

    const input = container.querySelector('ds-input')

    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' })
    expect(mockHistoryPush).toHaveBeenCalledTimes(1)
  })
  it('changes the search input value', async () => {
    const { container } = render(<SearchInput />)

    const input = container.querySelector('ds-input')

    expect(input.value).toBe('texto com espaços')

    fireEvent.change(input, { target: { value: 'Bob' } })
    expect(input.value).toBe('Bob')
  })
  it('disables the input when disabled property is true', async () => {
    const { container } = render(<SearchInput disabled={true} />)

    const input = container.querySelector('ds-input')
    expect(input.disabled).toBe(true)
  })
})
