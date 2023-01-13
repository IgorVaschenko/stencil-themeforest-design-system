import { newE2EPage } from '@stencil/core/testing';

describe('tf-shadow-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tf-shadow-btn></tf-shadow-btn>');

    const element = await page.find('tf-shadow-btn');
    expect(element).toHaveClass('hydrated');
  });
});
