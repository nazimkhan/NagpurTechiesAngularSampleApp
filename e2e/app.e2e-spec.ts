import { TechiesPage } from './app.po';

describe('techies App', () => {
  let page: TechiesPage;

  beforeEach(() => {
    page = new TechiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
