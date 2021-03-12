import { css } from 'lit-element'

export default css`
  .button {
    align-items: center;
    background: none;
    border: none;
    color: var(--white);
    cursor: pointer;
    display: flex;
    font-family: var(--font-family);
    font-size: var(--l-font-size);
    gap: 5px;
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
    margin-bottom: 1px;
    padding: 3px;
    transform: rotate(135deg);
  }
`
