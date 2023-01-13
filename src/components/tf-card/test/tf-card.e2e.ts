import { newE2EPage } from '@stencil/core/testing';

describe('tf-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tf-card></tf-card>');

    const element = await page.find('tf-card');
    expect(element).toHaveClass('hydrated');
  });
});
