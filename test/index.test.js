const test = require('tap').test;
const fs = require('fs');
const { generate } = require('../');

test('generate function generate entry functions and global assignments from exports.*', function(t) {
  const source = fs.readFileSync(__dirname + '/fixtures/exports-source.js', {encoding: 'utf8'});
  const expected = fs.readFileSync(__dirname + '/fixtures/exports-expected.js', {encoding: 'utf8'});
  const expectedGlobalAssignments = fs.readFileSync(__dirname + '/fixtures/exports-generated-global-assignments-expected.js', {encoding: 'utf8'});
  const output = generate(source, { comment: true, autoGlobalExports: true });
  t.equal(output.entryPointFunctions, expected, 'actual output will match expected');
  t.equal(output.globalAssignments, expectedGlobalAssignments, 'actual output will match expected');
  t.end();
});

test('generate function generate entry functions from global assignments', function(t) {
  const source = fs.readFileSync(__dirname + '/fixtures/source.js', {encoding: 'utf8'});
  const expected = fs.readFileSync(__dirname + '/fixtures/expected.js', {encoding: 'utf8'});
  const output = generate(source, { comment: true });
  t.equal(output.entryPointFunctions, expected, 'actual output will match expected');
  t.equal(output.globalAssignments, undefined, 'actual output will match expected');
  t.end();
});

test('Can parse ES module syntax', function(t) {
  const source = fs.readFileSync(__dirname + '/fixtures/esm-source.js', {encoding: 'utf8'});
  const expected = fs.readFileSync(__dirname + '/fixtures/esm-expected.js', {encoding: 'utf8'});
  const output = generate(source, { comment: true });
  t.equal(output.entryPointFunctions, expected, 'actual output will match expected');
  t.equal(output.globalAssignments, undefined, 'actual output will match expected');
  t.end();
});

test('generate function generate entry functions and global assignments from exports.*', function(t) {
  const source = fs.readFileSync(__dirname + '/fixtures/exports-source-acorn.js', {encoding: 'utf8'});
  const expected = fs.readFileSync(__dirname + '/fixtures/exports-expected-acorn.js', {encoding: 'utf8'});
  const expectedGlobalAssignments = fs.readFileSync(__dirname + '/fixtures/exports-generated-global-assignments-expected.js', {encoding: 'utf8'});
  const output = generate(source, { parser:'acorn', comment: true, autoGlobalExports: true });
  t.equal(output.entryPointFunctions, expected, 'actual output will match expected');
  t.equal(output.globalAssignments, expectedGlobalAssignments, 'actual output will match expected');
  t.end();
});

test('generate function generate entry functions from global assignments', function(t) {
  const source = fs.readFileSync(__dirname + '/fixtures/source-acorn.js', {encoding: 'utf8'});
  const expected = fs.readFileSync(__dirname + '/fixtures/expected-acorn.js', {encoding: 'utf8'});
  const output = generate(source, { parser:'acorn', comment: true });
  t.equal(output.entryPointFunctions, expected, 'actual output will match expected');
  t.equal(output.globalAssignments, undefined, 'actual output will match expected');
  t.end();
});

test('Can parse ES module syntax', function(t) {
  const source = fs.readFileSync(__dirname + '/fixtures/esm-source-acorn.js', {encoding: 'utf8'});
  const expected = fs.readFileSync(__dirname + '/fixtures/esm-expected-acorn.js', {encoding: 'utf8'});
  const output = generate(source, { parser:'acorn', comment: true });
  t.equal(output.entryPointFunctions, expected, 'actual output will match expected');
  t.equal(output.globalAssignments, undefined, 'actual output will match expected');
  t.end();
});

