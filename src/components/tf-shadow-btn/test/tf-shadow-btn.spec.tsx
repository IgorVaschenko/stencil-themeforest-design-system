import { newSpecPage } from '@stencil/core/testing';
import { TfShadowBtn } from '../tf-shadow-btn';

describe('tf-shadow-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TfShadowBtn],
      html: `<tf-shadow-btn></tf-shadow-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <tf-shadow-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tf-shadow-btn>
    `);
  });
});
