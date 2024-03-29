import { LitElement, customElement, property } from "lit-element";

import style from "./style";
import template from "./template";

@customElement("button-component")
export class ButtonComponent extends LitElement {
  public static styles = style;
  public render = template.bind(this);

  @property({ reflect: true, attribute: "aria-label" }) ariaLabel: string;
  @property() label: string;
  @property() outlined = false;
}
