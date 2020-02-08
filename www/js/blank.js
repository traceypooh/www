/* eslint-disable semi */
import { LitElement, html, css } from './web_modules/lit-element.js'

// eslint-disable-next-line import/prefer-default-export
export class BlankBlank extends LitElement {
  static get properties() {
    return {}
  }

  static get styles() {
    return css``
  }

  render() {
    return html``
  }
}

customElements.define('blank-blank', BlankBlank)
