import { XiangxukejiPage } from './app.po';

describe('xiangxukeji App', function() {
  let page: XiangxukejiPage;

  beforeEach(() => {
    page = new XiangxukejiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
