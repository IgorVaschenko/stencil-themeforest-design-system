import { newE2EPage } from '@stencil/core/testing';

describe('tf-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tf-tag></tf-tag>');

    const element = await page.find('tf-tag');
    expect(element).toHaveClass('hydrated');
  });
});
