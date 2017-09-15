import { PacoyescasPage } from './app.po';

describe('pacoyescas App', () => {
  let page: PacoyescasPage;

  beforeEach(() => {
    page = new PacoyescasPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
