import { css } from "lit-element";

/* What's the paradigm here
 Browser Resets
 Inherited custom properties
 */
export default css`
  :host {
    display: flex;
    color: var(--button-color);
  }

  button {
    background: inherit;
    border: 0;
    color: inherit;
    flex: 1;
    cursor: pointer;
  }

  :host([outlined]) {
    border: 1px solid #fff;
    border-radius: 0.25em;
  }
`;
