import { HmPage } from './app.po';

describe('hm App', function() {
  let page: HmPage;

  beforeEach(() => {
    page = new HmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
