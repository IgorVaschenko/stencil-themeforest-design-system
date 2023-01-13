import { newE2EPage } from '@stencil/core/testing';

describe('tf-control', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tf-control></tf-control>');

    const element = await page.find('tf-control');
    expect(element).toHaveClass('hydrated');
  });
});
