import { html, fixture, expect, oneEvent } from '@open-wc/testing'
import Button from '../src/index'
import '../src/index.js'

describe('<ds-button/>', () => {
  it('renders the button with a left-arrow', async () => {
    const el = await fixture<Button>(html`
      <ds-button isReturnButton="true">Return button</ds-button>
    `)
    const arrow = el.shadowRoot?.querySelector('.arrow-left')
    expect(arrow).to.exist
  })
  it('renders the button disabled', async () => {
    const el = await fixture<Button>(html`
      <ds-button disabled>Button disabled</ds-button>
    `)
    expect(el).to.have.attribute('disabled')
  })
  it('fires external click event', async () => {
    const el = await fixture<Button>(html`
      <ds-button @click="${() => 'void'}"> Button clicked </ds-button>
    `)
    setTimeout(() => el.click())

    const e = await oneEvent(el, 'click')
    expect(e).to.be.not.null
  })
})
