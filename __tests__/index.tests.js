import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

// eslint-disable-next-line no-undef
test('check genDiff', () => {
  const plainData = readFile('expected_file.txt');
  const expected = plainData.trim();
  const actual = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  // eslint-disable-next-line no-undef
  expect(actual).toEqual(expected);
});