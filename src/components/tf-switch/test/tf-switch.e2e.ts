import { newE2EPage } from '@stencil/core/testing';

describe('tf-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tf-switch></tf-switch>');

    const element = await page.find('tf-switch');
    expect(element).toHaveClass('hydrated');
  });
});
