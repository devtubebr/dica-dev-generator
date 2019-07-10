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
  [languagesEnum.CSS]: {
    id: languagesEnum.CSS,
    name: 'CSS',
    src: '/assets/images/logo-css.png',
    width: '33'
  },
  [languagesEnum.CSHARP]: {
    id: languagesEnum.CSHARP,
    name: 'C#',
    src: '/assets/images/logo-csharp.png',
    width: '45'
  },
  [languagesEnum.HTML]: {
    id: languagesEnum.HTML,
    name: 'HTML',
    src: '/assets/images/logo-html.png',
    width: '35'
  },
  [languagesEnum.JAVASCRIPT]: {
    id: languagesEnum.JAVASCRIPT,
    name: 'Javascript',
    src: '/assets/images/logo-javascript.png',
    width: '45'
  },
  [languagesEnum.PHP]: {
    id: languagesEnum.PHP,
    name: 'PHP',
    src: '/assets/images/logo-php.png',
    width: '85'
  },
  [languagesEnum.PYTHON]: {
    id: languagesEnum.PYTHON,
    name: 'Python',
    src: '/assets/images/logo-python.png',
    width: '55'
  },
  [languagesEnum.SQL]: {
    id: languagesEnum.SQL,
    name: 'SQL',
    src: '/assets/images/logo-sql.png',
    width: '50'
  }
});

/**
 * @type Array
 */
export const languagesToArray = () => Object.values(languages);
