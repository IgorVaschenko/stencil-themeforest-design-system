import { newSpecPage } from '@stencil/core/testing';
import { TfIcons } from '../tf-icons';

describe('tf-icons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TfIcons],
      html: `<tf-icons></tf-icons>`,
    });
    expect(page.root).toEqualHtml(`
      <tf-icons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tf-icons>
    `);
  });
});
