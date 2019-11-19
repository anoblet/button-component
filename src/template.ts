import { html } from "lit-element";

export default function() {
  return html`
    <button part="button" aria-label=${this.ariaLabel}><slot>${this.label}</slot></button>
  `;
}
