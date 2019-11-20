var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, property } from "lit-element";
import style from "./style";
import template from "./template";
let ButtonComponent = class ButtonComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.render = template.bind(this);
        this.outlined = false;
    }
};
ButtonComponent.styles = style;
__decorate([
    property({ reflect: true, attribute: "aria-label" })
], ButtonComponent.prototype, "ariaLabel", void 0);
__decorate([
    property()
], ButtonComponent.prototype, "label", void 0);
__decorate([
    property()
], ButtonComponent.prototype, "outlined", void 0);
ButtonComponent = __decorate([
    customElement("button-component")
], ButtonComponent);
export { ButtonComponent };
