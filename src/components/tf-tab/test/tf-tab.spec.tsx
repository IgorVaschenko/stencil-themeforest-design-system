import { newSpecPage } from '@stencil/core/testing';
import { TfTab } from '../tf-tab';

describe('tf-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TfTab],
      html: `<tf-tab></tf-tab>`,
    });
    expect(page.root).toEqualHtml(`
      <tf-tab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tf-tab>
    `);
  });
});
