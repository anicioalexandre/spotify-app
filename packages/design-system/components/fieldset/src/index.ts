import {
  customElement,
  html,
  LitElement,
  property,
  TemplateResult
} from 'lit-element'

import styles from './styles'

@customElement('ds-fieldset')
export default class Fieldset extends LitElement {
  @property()
  label = ''

  static styles = styles
  render(): TemplateResult {
    return html`
      <div class="fieldset">
        <legend class="label">${this.label}</legend>
        <div class="slot-container">
          <slot />
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-fieldset': Fieldset
  }
}
