import { css } from 'lit-element'

export default css`
  .fieldset {
    border: none;
  }

  .slot-container {
    display: flex;
    gap: 50px;
    justify-content: flex-start;
    max-height: fit-content;
    min-height: 300px;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0;
  }

  .fieldset legend {
    padding: 10px 0;
  }

  .label {
    color: var(--white);
    font-family: var(--font-family);
    font-size: var(--l-font-size);
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }

  .slot-container::-webkit-scrollbar-track {
    background: none;
  }

  .slot-container::-webkit-scrollbar-thumb {
    background: var(--gray-dark);
  }

  .slot-container::-webkit-scrollbar-thumb:hover {
    background: var(--gray-medium);
  }
`
