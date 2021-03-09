import {
  customElement,
  html,
  LitElement,
  property,
  TemplateResult
} from 'lit-element'

@customElement('ds-image-icon')
export default class ImageIcon extends LitElement {
  @property()
  imageSrc = ''

  @property()
  imageWidth = 64

  @property()
  imageHeight = 64

  @property()
  imageAlt = ''

  render(): TemplateResult {
    return html`
      <img
        src=${this.imageSrc}
        alt=${this.imageAlt}
        width=${this.imageWidth}
        height=${this.imageHeight}
      />
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-image-icon': ImageIcon
  }
}
