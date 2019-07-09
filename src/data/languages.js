/**
 * @type Number
 */
export const LANGUAGE_PHP = 1;

/**
 * @type Number
 */
export const LANGUAGE_JAVASCRIPT = 2;

/**
 * @type Function
 */
export const getLanguageById = id => languages.find(lang => lang.id === parseInt(id));

/**
 * @type Array<Object>
 */
export const languages = [
  {
    id: 2,
    name: 'Javascript',
    src: '/assets/images/logo-javascript.png',
    width: '45'
  },
  {
    id: 1,
    name: 'PHP',
    src: '/assets/images/logo-php.png',
    width: '85'
  }
];