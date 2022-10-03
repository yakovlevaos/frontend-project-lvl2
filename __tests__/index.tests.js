import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const tests = [
  ['file1.json', 'file2.json', 'expected_file.txt'],
  ['file1.yml', 'file2.yml', 'expected_file.txt'],
];

describe('check for correct diff', () => {
  test.each(tests)('Compare files', (firstArg, secondArg, expectedResult) => {
    const firstFile = getFixturePath(firstArg);
    const secondFile = getFixturePath(secondArg);
    const getResult = readFile(expectedResult);
    const result = genDiff(firstFile, secondFile);
    expect(result).toEqual(getResult);
  });
});
