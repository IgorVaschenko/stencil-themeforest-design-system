import { newSpecPage } from '@stencil/core/testing';
import { TfLink } from '../tf-link';

describe('tf-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TfLink],
      html: `<tf-link></tf-link>`,
    });
    expect(page.root).toEqualHtml(`
      <tf-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tf-link>
    `);
  });
});
