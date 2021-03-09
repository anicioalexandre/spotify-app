import {
  customElement,
  html,
  LitElement,
  property,
  TemplateResult
} from 'lit-element'
import { booleanConverter } from 'ds-utils'

import styles from './styles'

@customElement('ds-button')
export default class Button extends LitElement {
  @property({ type: Boolean, converter: booleanConverter })
  isReturnButton = false

  @property({ type: Boolean, converter: booleanConverter })
  disabled = false

  private _renderArrowLeft() {
    if (this.isReturnButton) return html`<span class="arrow-left" />`
  }

  static styles = styles
  render(): TemplateResult {
    return html`
      <button ?disabled=${this.disabled} class="button">
        ${this._renderArrowLeft()}
        <slot />
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-button': Button
  }
}
