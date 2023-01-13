import { newSpecPage } from '@stencil/core/testing';
import { TfSwitch } from '../tf-switch';

describe('tf-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TfSwitch],
      html: `<tf-switch></tf-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <tf-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tf-switch>
    `);
  });
});
