import {
  html,
  fixture,
  expect,
  oneEvent,
  elementUpdated
} from '@open-wc/testing'
import OrderedList from '../src/index'
import '../src/index.js'

const DATA_MOCK = [
  { name: 'Nome da faixa 1', duration: 123, id: 1 },
  { name: 'Nome da faixa 2', duration: 456, id: 2 },
  { name: 'Nome da faixa 3', duration: 789, id: 3 }
]

describe('<ds-ordered-list/>', () => {
  it('renders a ordered list length with the same length of the DATA_MOCK', async () => {
    const el = await fixture<OrderedList>(html` <ds-ordered-list /> `)
    el.dataList = DATA_MOCK
    await elementUpdated(el)

    const listItens = el.shadowRoot?.querySelectorAll('li')
    expect(listItens?.length).to.equal(DATA_MOCK.length)
  })
  it('renders a ordered list with the correct labels', async () => {
    const el = await fixture<OrderedList>(html` <ds-ordered-list /> `)
    el.dataList = DATA_MOCK
    await elementUpdated(el)

    const labelsItens = el.shadowRoot?.querySelectorAll('span') || []
    expect(labelsItens[0]).to.have.trimmed.text('Nome da faixa 1')
    expect(labelsItens[1]).to.have.trimmed.text('123')
    expect(labelsItens[2]).to.have.trimmed.text('Nome da faixa 2')
    expect(labelsItens[3]).to.have.trimmed.text('456')
    expect(labelsItens[4]).to.have.trimmed.text('Nome da faixa 3')
    expect(labelsItens[5]).to.have.trimmed.text('789')
  })
  it('renders the list buttons with a disabled property', async () => {
    const el = await fixture<OrderedList>(
      html` <ds-ordered-list disabled="true" /> `
    )
    el.dataList = DATA_MOCK
    await elementUpdated(el)

    const listButtons = el.shadowRoot?.querySelectorAll('button') || []
    expect(listButtons[0]).to.have.property('disabled', true)
    expect(listButtons[2]).to.have.property('disabled', true)
  })
  it('fires an event with the id passed to the button', async () => {
    const el = await fixture<OrderedList>(html` <ds-ordered-list /> `)
    el.dataList = DATA_MOCK
    await elementUpdated(el)

    const firstButton: any = el.shadowRoot?.querySelector('button')

    setTimeout(() => firstButton.click())

    const event = await oneEvent(el, 'listitemclick')
    expect(event).to.exist
    expect(event.detail.id).to.equal('1')
  })
})
