import { css, unsafeCSS, CSSResult } from 'lit-element'

export const dynamicStyles = (imageWidth?: number): CSSResult => {
  const imageWidthValue = unsafeCSS(imageWidth)

  return css`
    .image-label-container {
      width: ${imageWidthValue}px;
    }
  `
}

export default css`
  .image-label-container {
    display: flex;
    flex-direction: column;
    font-family: var(--font-family);
    font-size: var(--m-font-size);
    gap: 10px;
    overflow: hidden;
    text-align: center;
  }

  .primary-label {
    color: var(--white);
  }

  .secondary-label {
    color: var(--gray-medium);
  }
`
