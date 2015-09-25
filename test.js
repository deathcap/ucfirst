'use strict';

const ucfirst = require('.');
const test = require('tape');

test('ascii', t => {
  t.equals(ucfirst('hello'), 'Hello');
  t.equals(ucfirst('abc'), 'Abc');
  t.equals(ucfirst('h'), 'H');
  t.equals(ucfirst('H'), 'H');
  t.equals(ucfirst('Abc'), 'Abc');
  t.equals(ucfirst('Hello'), 'Hello');
  t.end();
});

test('unicode', t => {
  t.equals(ucfirst('éllo'), 'Éllo');
  t.equals(ucfirst('Éllo'), 'Éllo');
  t.end();
});

test('empty', t => {
  t.equals(ucfirst(''), '');
  t.end();
});

test('nonstring throws', t => {
  t.throws(() => ucfirst(undefined));
  t.throws(() => ucfirst());
  t.throws(() => ucfirst(null));
  t.throws(() => ucfirst(false));
  t.throws(() => ucfirst(true));
  t.throws(() => ucfirst([]));
  t.throws(() => ucfirst({}));
  t.end();
});
