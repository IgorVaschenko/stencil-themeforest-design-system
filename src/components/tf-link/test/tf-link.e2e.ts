import { newE2EPage } from '@stencil/core/testing';

describe('tf-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tf-link></tf-link>');

    const element = await page.find('tf-link');
    expect(element).toHaveClass('hydrated');
  });
});
