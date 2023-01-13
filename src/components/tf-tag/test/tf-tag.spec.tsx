import { newSpecPage } from '@stencil/core/testing';
import { TfTag } from '../tf-tag';

describe('tf-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TfTag],
      html: `<tf-tag></tf-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <tf-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tf-tag>
    `);
  });
});
