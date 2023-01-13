import { newSpecPage } from '@stencil/core/testing';
import { TfButton } from '../tf-button';

describe('tf-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TfButton],
      html: `<tf-button></tf-button>`,
    });
    expect(page.root).toEqualHtml(`
      <tf-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tf-button>
    `);
  });
});
