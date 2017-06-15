import { CheesePlatePage } from './app.po';

describe('cheese-plate App', () => {
  let page: CheesePlatePage;

  beforeEach(() => {
    page = new CheesePlatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
