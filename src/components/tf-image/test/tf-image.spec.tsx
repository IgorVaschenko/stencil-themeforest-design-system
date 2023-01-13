import { newSpecPage } from '@stencil/core/testing';
import { TfImage } from '../tf-image';

describe('tf-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TfImage],
      html: `<tf-image></tf-image>`,
    });
    expect(page.root).toEqualHtml(`
      <tf-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tf-image>
    `);
  });
});
