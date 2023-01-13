import { newE2EPage } from '@stencil/core/testing';

describe('tf-shadow-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tf-shadow-card></tf-shadow-card>');

    const element = await page.find('tf-shadow-card');
    expect(element).toHaveClass('hydrated');
  });
});
