import { css } from "lit-element";

/* What's the paradigm here
 Browser Resets
 Inherited custom properties
 */
export default css`
  :host {
    /* define style API */
      --button-background: inherit;
      --button-color: inherit;
    /* End define style API */
  }

  button {
    /*
      Set initial state
     */
    background: var(--button-background);
    color: var(--button-color);
  }

  /* Purely reset*/
  button {
    border: 0;
  }

  :host([outlined]) {
    border: 1px solid #fff;
  }
`;
