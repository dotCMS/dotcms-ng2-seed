import { DotcmsNg2SeedPage } from './app.po';

describe('dotcms-ng2-seed App', function() {
  let page: DotcmsNg2SeedPage;

  beforeEach(() => {
    page = new DotcmsNg2SeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
