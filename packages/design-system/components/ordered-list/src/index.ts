import {
  customElement,
  html,
  LitElement,
  property,
  TemplateResult
} from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import { booleanConverter } from 'ds-utils'

import styles from './styles'

@customElement('ds-ordered-list')
export default class OrderedList extends LitElement {
  @property({ type: String })
  itemSelected = ''

  @property({ attribute: false, reflect: true })
  dataList: DataList = []

  @property({ type: Boolean, converter: booleanConverter })
  disabled = false

  private _handleClick(e: ButtonEvent): void {
    const { id } = e.target
    this.dispatchEvent(
      new CustomEvent('listitemclick', {
        bubbles: true,
        composed: true,
        detail: { id }
      })
    )
  }

  static styles = styles
  render(): TemplateResult {
    return html`
      <ol class="list">
        ${this.dataList.map(({ trackDuration, trackId, trackName }) => {
          const isSelected = this.itemSelected === trackId
          return html`<li class="list-item">
            <button
              class=${classMap({
                'list-button': true,
                selected: isSelected
              })}
              role="button"
              @click=${this._handleClick}
              ?disabled=${this.disabled}
              id=${trackId}
            >
              <span
                class=${classMap({
                  'label-item': true,
                  'first-label': true,
                  selected: isSelected
                })}
                >${trackName}</span
              >
              <span class="label-item">${trackDuration}</span>
            </button>
          </li>`
        })}
      </ol>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-ordered-list': OrderedList
  }
}

type ButtonEvent = {
  target: { id: number }
}

type DataList = { trackDuration: number; trackId: string; trackName: string }[]
