import { html, fixture, expect, fixtureCleanup } from '@open-wc/testing'

import Input from '../src/index'
import '../src/index.js'

describe('<ds-input />', () => {
  afterEach(() => {
    fixtureCleanup()
  })

  it('renders the Input with disabled, font size and weight corresponding to the default values', async () => {
    const el = await fixture<Input>(
      html`<ds-input fontSize="s" fontWeight="regular" />`
    )
    expect(el).to.have.property('disabled', false)

    const style = el.shadowRoot?.querySelector('style')?.innerHTML

    expect(style).to.contains('--s-font-size')
    expect(style).to.contains('--regular-font-weight')
  })
  it('renders the Input with label and placeholder corresponding to the default values', async () => {
    const el = await fixture<Input>(
      html`<ds-input
        label="Busque por artistas, álbuns ou músicas"
        placeholder="Comece a escrever..."
      />`
    )
    expect(el).to.have.property(
      'label',
      'Busque por artistas, álbuns ou músicas'
    )
    expect(el).to.have.property('placeholder', 'Comece a escrever...')
  })
  it('renders a disabled input corresponding when disabled property is true', async () => {
    const el = await fixture<Input>(html`<ds-input disabled="true" />`)
    expect(el).to.have.property('disabled', true)
  })
  it('checks if the value types is the same value inside the input', async () => {
    const el = await fixture<Input>(html`<ds-input />`)

    const input = el.shadowRoot?.querySelector('input') as HTMLInputElement
    input.value = 'Jack Johnson'
    input.dispatchEvent(
      new InputEvent('input', { bubbles: true, composed: true })
    )
    await el.updateComplete
    expect(el.value).to.equal(input.value)
  })
})
