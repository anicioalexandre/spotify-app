import {
  customElement,
  html,
  LitElement,
  property,
  TemplateResult
} from 'lit-element'

import styles, { dynamicStyles } from './styles'

@customElement('ds-image-label')
export default class ImageLabel extends LitElement {
  @property()
  imageSrc = ''

  @property()
  imageWidth = 200

  @property()
  imageHeight = 200

  @property()
  primaryLabel = ''

  @property()
  secondaryLabel = ''

  static styles = styles
  render(): TemplateResult {
    return html`
      <style>
        ${dynamicStyles(this.imageWidth)}
      </style>
      <div class="image-label-container">
        <img
          onerror="this.style.display='none'"
          src=${this.imageSrc}
          alt=${this.primaryLabel}
          width=${this.imageWidth}
          height=${this.imageHeight}
        />
        <span class="primary-label">${this.primaryLabel}</span>
        <span class="secondary-label">${this.secondaryLabel}</span>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-image-label': ImageLabel
  }
}
