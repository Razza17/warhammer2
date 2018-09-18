const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function getUserInput(data) {
  let errors = {};
  data.pseudo = !isEmpty(data.pseudo) ? data.pseudo : '';

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
