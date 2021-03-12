import { css } from 'lit-element'

export default css`
  .list {
    margin: 0;
  }

  .list-button {
    background: none;
    border: none;
    color: var(--gray-medium);
    cursor: pointer;
    display: flex;
    font-family: var(--font-family);
    font-size: var(--m-font-size);
    justify-content: space-between;
    outline: 0;
    transition: all 0.25s ease;
    width: 100%;
  }

  .list-button:disabled {
    color: var(--gray-medium);
    cursor: not-allowed;
  }

  .list-button:not(:disabled):hover {
    opacity: var(--hover-opacity);
  }

  .list-item {
    color: var(--gray-medium);
    font-family: var(--font-family);
    padding: 10px;
  }

  .label-item {
    pointer-events: none;
  }

  .first-label {
    color: var(--white);
  }

  .list-button[disabled] .first-label {
    color: var(--gray-medium);
  }
`
