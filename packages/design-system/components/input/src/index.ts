import {
  html,
  LitElement,
  property,
  customElement,
  TemplateResult
} from 'lit-element'
import { booleanConverter } from 'ds-utils'

import styles, { dynamicStyles } from './styles'

@customElement('ds-input')
export default class Input extends LitElement {
  @property()
  fontSize = 'xxl'

  @property()
  fontWeight = 'bold'

  @property()
  label = ''

  @property()
  placeholder = ''

  @property()
  value = ''

  @property({ type: Boolean, converter: booleanConverter })
  disabled = false

  private _handleInput({ target }: Event) {
    const { value } = target as HTMLInputElement
    this.value = value
  }

  static styles = styles

  render(): TemplateResult {
    return html`
      <style>
        ${dynamicStyles(this.fontSize, this.fontWeight)}
      </style>
      <label class="input-container">
        ${this.label}
        <input
          @input=${this._handleInput}
          ?disabled=${this.disabled}
          .value=${this.value}
          class="input"
          type="text"
          placeholder=${this.placeholder}
        />
      </label>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-input': Input
  }
}
