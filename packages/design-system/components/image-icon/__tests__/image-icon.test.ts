import { html, fixture, expect } from '@open-wc/testing'
import ImageIcon from '../src/index'
import '../src/index.js'

describe('<ds-image-icon/>', () => {
  it('should render component with image and two labels', async () => {
    const el = await fixture<ImageIcon>(
      html` <ds-image-icon imageSrc="image-source" imageAlt="image alt" />`
    )
    const image = el.shadowRoot?.querySelector('img')
    expect(image).to.have.property('src', 'http://localhost:8000/image-source')
    expect(image).to.have.property('alt', 'image alt')
  })
  it('should render component with width and height pre defined', async () => {
    const el = await fixture<ImageIcon>(
      html` <ds-image-icon imageWidth="100" imageHeight="100" />`
    )
    const image = el.shadowRoot?.querySelector('img')
    expect(image).to.have.property('width', 100)
    expect(image).to.have.property('height', 100)
  })
})
