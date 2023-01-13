import { newSpecPage } from '@stencil/core/testing';
import { TfControl } from '../tf-control';

describe('tf-control', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TfControl],
      html: `<tf-control></tf-control>`,
    });
    expect(page.root).toEqualHtml(`
      <tf-control>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tf-control>
    `);
  });
});
