import { RNg2TemplatePage } from './app.po';

describe('r-ng2-template App', function() {
  let page: RNg2TemplatePage;

  beforeEach(() => {
    page = new RNg2TemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
