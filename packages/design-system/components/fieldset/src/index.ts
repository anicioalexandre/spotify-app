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
      <fieldset class="fieldset">
        <legend class="label">${this.label}</legend>
        <slot />
      </fieldset>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-fieldset': Fieldset
  }
}
