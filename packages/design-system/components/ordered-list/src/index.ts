import {
  customElement,
  html,
  LitElement,
  property,
  TemplateResult
} from 'lit-element'
import { booleanConverter } from 'ds-utils'

import styles from './styles'

@customElement('ds-ordered-list')
export default class OrderedList extends LitElement {
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
        ${this.dataList.map(
          ({ trackDuration, trackId, trackName }) =>
            html`<li class="list-item">
              <button
                class="list-button"
                role="button"
                @click=${this._handleClick}
                ?disabled=${this.disabled}
                id=${trackId}
              >
                <span class="label-item first-label">${trackName}</span>
                <span class="label-item">${trackDuration}</span>
              </button>
            </li>`
        )}
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
