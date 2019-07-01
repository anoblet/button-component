import { LitElement, customElement, property } from "lit-element";

import Style from "./Style";
import Template from "./Template";

@customElement("button-component")
export class ButtonComponent extends LitElement {
  public static styles = Style;
  public render = Template.bind(this);

  @property() text;
  @property() outlined = false;
}
