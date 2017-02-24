import { Project5Page } from './app.po';

describe('project5 App', () => {
  let page: Project5Page;

  beforeEach(() => {
    page = new Project5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
