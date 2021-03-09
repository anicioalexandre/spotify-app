import { html, fixture, expect } from '@open-wc/testing'
import Fieldset from '../src/index'
import '../src/index.js'

describe('<ds-fieldset/>', () => {
  it('should render component with legend and slot', async () => {
    const el = await fixture<Fieldset>(
      html` <ds-fieldset label="Álbuns buscados recentemente">
        <h1>slot text</h1>
      </ds-fieldset>`
    )

    const legend = el.shadowRoot?.querySelector('legend')
    expect(legend).to.have.trimmed.text('Álbuns buscados recentemente')

    const slot = el.shadowRoot?.querySelector('slot')?.assignedElements()[0]
    expect(slot?.nodeName).to.be.equal('H1')
    expect(slot).to.have.text('slot text')
  })

  it('should render component without legend and empty slot', async () => {
    const el = await fixture<Fieldset>(html`<ds-fieldset> </ds-fieldset>`)

    const legend = el.shadowRoot?.querySelector('legend')
    expect(legend).to.have.trimmed.text('')

    const slot = el.shadowRoot?.querySelector('slot')?.assignedNodes()[0]
    expect(slot).to.be.empty
  })
})
