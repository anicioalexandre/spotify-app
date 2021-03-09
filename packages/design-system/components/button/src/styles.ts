import { css } from 'lit-element'

export default css`
  .button {
    background: none;
    border: none;
    color: var(--white);
    cursor: pointer;
    font-family: var(--font-family);
    font-size: var(--s-font-size);
    outline: 0;
    transition: all 0.25s ease;
  }

  .button:disabled {
    color: var(--gray-medium);
    cursor: not-allowed;
  }

  .button:not(:disabled):hover {
    opacity: var(--hover-opacity);
  }

  .button[disabled] .arrow-left {
    border-color: var(--gray-medium);
  }

  .arrow-left {
    -webkit-transform: rotate(135deg);
    border-color: var(--white);
    border-style: solid;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(135deg);
  }
`
