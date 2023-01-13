import { newE2EPage } from '@stencil/core/testing';

describe('tf-icons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tf-icons></tf-icons>');

    const element = await page.find('tf-icons');
    expect(element).toHaveClass('hydrated');
  });
});
