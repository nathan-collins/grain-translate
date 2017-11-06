import GrainLitElement, { html } from '../../grain-lit-element/GrainLitElement.js';
import GrainTranslateMixin from '../GrainTranslateMixin.js';

export default class GrainTranslateExample extends GrainTranslateMixin(GrainLitElement(HTMLElement)) {
  render() {
    return html`
      <h3>${this.t('greeting')}</h3>
    `;
  }
}

customElements.define('grain-translate-example', GrainTranslateExample);
