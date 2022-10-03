import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import format from './formatters/format.js';
import buildTree from './buildTree.js';

const readFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', filename));
const fileFormat = (filename) => path.extname(filename).slice(1);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const file1format = fileFormat(filepath1);
  const file2format = fileFormat(filepath2);
  const fileContent1 = readFile(filepath1);
  const fileContent2 = readFile(filepath2);
  const data1 = parse(file1format, fileContent1);
  const data2 = parse(file2format, fileContent2);
  const innerTree = buildTree(data1, data2);
  return format(innerTree, formatName);
};
export default genDiff;
