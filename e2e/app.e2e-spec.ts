import { MyAppAngular2Page } from './app.po';

describe('my-app-angular2 App', function() {
  let page: MyAppAngular2Page;

  beforeEach(() => {
    page = new MyAppAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
