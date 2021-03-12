import React from 'react'
import renderWithRedux from '../../../helpers/renderWithRedux'
import renderWithRouter from '../../../helpers/renderWithRouter'
import Album from '..'
import getTokenEndpoint from '../../../services/getTokenEndpoint'
import getAlbumEndpoint from '../../../services/getAlbumEndpoint'
import { ALBUM_ZE_NETO_MOCK } from '../../../services/__mocks__/getAlbumMock'

afterEach(() => {
  getTokenEndpoint.mockClear()
  getAlbumEndpoint.mockClear()
})

jest.mock('../../../services/getTokenEndpoint')
getTokenEndpoint.mockResolvedValue('token')

jest.mock('../../../services/getAlbumEndpoint')
getAlbumEndpoint.mockResolvedValue(ALBUM_ZE_NETO_MOCK)

describe('Tests for Album page', () => {
  it('renders Album page component', async () => {
    const component = renderWithRedux(renderWithRouter(<Album />))
    await component.findAllByText('Voltar')
    expect(getTokenEndpoint).toHaveBeenCalledTimes(1)
    expect(getAlbumEndpoint).toHaveBeenCalledTimes(1)
    expect(component).toMatchSnapshot()
  })
})
