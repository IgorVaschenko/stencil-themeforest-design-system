import { newE2EPage } from '@stencil/core/testing';

describe('tf-subscribe', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tf-subscribe></tf-subscribe>');

    const element = await page.find('tf-subscribe');
    expect(element).toHaveClass('hydrated');
  });
});
