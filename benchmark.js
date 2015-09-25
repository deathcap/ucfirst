'use strict';

function repeat(fn, description) {
  console.time(description);
  var i = 9999999;
  while (i--) {
    fn('abcdefg');
  }
  console.timeEnd(description);
}

repeat((s) => s.charAt(0, 1).toUpperCase() + s.substring(1), 'charAt + substring');
repeat((s) => s.charAt(0).toUpperCase() + s.substr(1), 'charAt + substr');
repeat((s) => s.substr(0, 1).toUpperCase() + s.substring(1), 'substr + substring');
repeat((s) => s.substr(0, 1).toUpperCase() + s.substr(1), 'substr + substr');
