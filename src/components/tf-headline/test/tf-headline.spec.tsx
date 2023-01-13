import { newSpecPage } from '@stencil/core/testing';
import { TfHeadline } from '../tf-headline';

describe('tf-headline', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TfHeadline],
      html: `<tf-headline></tf-headline>`,
    });
    expect(page.root).toEqualHtml(`
      <tf-headline>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tf-headline>
    `);
  });
});
