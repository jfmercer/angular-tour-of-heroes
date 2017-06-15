import { CheesePlatePage } from './app.po';

describe('cheese-plate App', () => {
  let page: CheesePlatePage;

  beforeEach(() => {
    page = new CheesePlatePage();
  });

  it('should have cheese', async() => {
    page.navigateTo();
    expect(await page.getParagraphText()).toEqual('Tour of Cheeses');
  });
});
