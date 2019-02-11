import { html, LitElement } from "lit-element";
import { customElement } from "lit-element";
import { TemplateResult } from "lit-html";
import { cssResult } from "../util/css";

import styles from "./backdrop-element.scss";

export interface IBackdropProperties {
}

@customElement("backdrop-element")
export class BackdropElement extends LitElement implements IBackdropProperties {

	static styles = [cssResult(styles)];

	protected render (): TemplateResult {
		return html``;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"backdrop-element": BackdropElement;
	}
}