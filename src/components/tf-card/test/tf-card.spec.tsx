import { newSpecPage } from '@stencil/core/testing';
import { TfCard } from '../tf-card';

describe('tf-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TfCard],
      html: `<tf-card></tf-card>`,
    });
    expect(page.root).toEqualHtml(`
      <tf-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tf-card>
    `);
  });
});
