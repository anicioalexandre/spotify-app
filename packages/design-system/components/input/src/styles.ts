import { css, unsafeCSS, CSSResult } from 'lit-element'

export const dynamicStyles = (
  fontSize?: string,
  fontWeight?: string
): CSSResult => {
  const fontSizeValue = unsafeCSS(fontSize)
  const fontWeightValue = unsafeCSS(fontWeight)

  return css`
    .input {
      font-size: var(--${fontSizeValue}-font-size);
      font-weight: var(--${fontWeightValue}-font-weight);
    }
  `
}
export default css`
  :host {
    --transition-time: 0.3s;
  }

  .input-container {
    color: var(--white);
    display: flex;
    flex-direction: column;
    font-family: var(--font-family);
  }

  .input {
    background: transparent;
    border-color: var(--gray-medium);
    border-width: 0 0 1px;
    color: var(--gray-medium);
    outline: 0;
    padding: 5px;
    transition: all var(--transition-time) ease;
  }

  .input:disabled {
    cursor: not-allowed;
  }

  .input::placeholder {
    transition: all var(--transition-time) ease;
  }

  .input:not(:disabled):hover,
  .input:focus {
    color: var(--white);
  }

  .input:not(:disabled):hover::placeholder {
    color: var(--gray-light);
  }

  @media screen and (max-width: 600px) {
    .input {
      font-size: var(--xl-font-size);
    }
    .input::placeholder {
      font-size: var(--xl-font-size);
    }
  }
`
