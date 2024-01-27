import { setLang } from './setLang';

describe('setLang()', () => {
  test('(/, zh) => /zh/', () => {
    expect(setLang('/', 'zh')).toBe('/zh/');
  });
  test('(/zh/, en) => /', () => {
    expect(setLang('/zh/', 'en')).toBe('/');
  });
  test('(/zh/changelog/, fr) => /fr/changelog/', () => {
    expect(setLang('/zh/changelog/', 'fr')).toBe('/fr/changelog/');
  });
});
