import { html } from "lit-element";

export default function() {
  return html`
    <button part="button"><slot>${this.text}</slot></button>
  `;
}
