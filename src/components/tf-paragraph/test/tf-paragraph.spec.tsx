import { newSpecPage } from '@stencil/core/testing';
import { TfParagraph } from '../tf-paragraph';

describe('tf-paragraph', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TfParagraph],
      html: `<tf-paragraph></tf-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <tf-paragraph>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tf-paragraph>
    `);
  });
});
