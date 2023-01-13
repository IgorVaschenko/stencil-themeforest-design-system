import { newE2EPage } from '@stencil/core/testing';

describe('tf-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tf-button></tf-button>');

    const element = await page.find('tf-button');
    expect(element).toHaveClass('hydrated');
  });
});
