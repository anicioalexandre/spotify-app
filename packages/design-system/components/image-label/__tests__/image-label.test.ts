import { html, fixture, expect } from '@open-wc/testing'
import ImageLabel from '../src/index'
import '../src/index.js'

describe('<ds-image-label/>', () => {
  it('should render component with image and two labels', async () => {
    const el = await fixture<ImageLabel>(
      html` <ds-image-label
        imageSrc="image-source"
        primaryLabel="Nome do álbum"
        secondaryLabel="Nome do artista"
      />`
    )
    const image = el.shadowRoot?.querySelector('img')
    expect(image).to.have.property('src', 'http://localhost:8000/image-source')
    expect(image).to.have.property('alt', 'Nome do álbum')

    const labels = el.shadowRoot?.querySelectorAll('span') || []
    expect(labels[0]).to.have.trimmed.text('Nome do álbum')
    expect(labels[1]).to.have.trimmed.text('Nome do artista')
  })
  it('should render component with width and height pre defined', async () => {
    const el = await fixture<ImageLabel>(
      html` <ds-image-label imageWidth="100" imageHeight="100" />`
    )
    const image = el.shadowRoot?.querySelector('img')
    expect(image).to.have.property('width', 100)
    expect(image).to.have.property('height', 100)
  })
})
