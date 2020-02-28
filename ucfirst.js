'use strict';

module.exports = function ucfirst(s) {
  return typeof s === 'string' ? s.charAt(0).toUpperCase() + s.substr(1) : s;
};
