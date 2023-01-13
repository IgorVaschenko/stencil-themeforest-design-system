import { newSpecPage } from '@stencil/core/testing';
import { TfSubscribe } from '../tf-subscribe';

describe('tf-subscribe', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TfSubscribe],
      html: `<tf-subscribe></tf-subscribe>`,
    });
    expect(page.root).toEqualHtml(`
      <tf-subscribe>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tf-subscribe>
    `);
  });
});
