import { newE2EPage } from '@stencil/core/testing';

describe('tf-headline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tf-headline></tf-headline>');

    const element = await page.find('tf-headline');
    expect(element).toHaveClass('hydrated');
  });
});
