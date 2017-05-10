'use strict';

module.exports = function ucfirst(s) {
  return s.charAt(0).toLocaleUpperCase() + s.substr(1);
};
