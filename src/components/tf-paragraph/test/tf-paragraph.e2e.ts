import { newE2EPage } from '@stencil/core/testing';

describe('tf-paragraph', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tf-paragraph></tf-paragraph>');

    const element = await page.find('tf-paragraph');
    expect(element).toHaveClass('hydrated');
  });
});
