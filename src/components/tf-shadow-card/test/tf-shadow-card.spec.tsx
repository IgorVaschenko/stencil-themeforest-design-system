import { newSpecPage } from '@stencil/core/testing';
import { TfShadowCard } from '../tf-shadow-card';

describe('tf-shadow-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TfShadowCard],
      html: `<tf-shadow-card></tf-shadow-card>`,
    });
    expect(page.root).toEqualHtml(`
      <tf-shadow-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tf-shadow-card>
    `);
  });
});
