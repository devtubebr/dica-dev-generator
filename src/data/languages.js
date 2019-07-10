/**
 * @type Object
 */
export const languagesEnum = {
  CSS: 7,
  CSHARP: 5,
  HTML: 6,
  JAVASCRIPT: 2,
  PHP: 1,
  PYTHON: 3,
  SQL: 4
};

/**
 * @type Object
 */
export const languages = Object.freeze({
  [languagesEnum.JAVASCRIPT]: {
    name: 'Javascript',
    src: '/assets/images/logo-javascript.png',
    width: '45'
  },
  [languagesEnum.PHP]: {
    name: 'PHP',
    src: '/assets/images/logo-php.png',
    width: '85'
  }
});

/**
 * @type Array
 */
export const languagesToArray = () => Object.values(languages);
