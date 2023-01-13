import { newE2EPage } from '@stencil/core/testing';

describe('tf-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tf-tab></tf-tab>');

    const element = await page.find('tf-tab');
    expect(element).toHaveClass('hydrated');
  });
});
