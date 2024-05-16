import {
  mkdir,
  mkfile,
  getChildren,
  getMeta,
  getName,
  isFile,
  isDirectory,
} from '@hexlet/immutable-fs-trees';

// Создание файлов и каталогов
const file1 = mkfile('file1');
const file2 = mkfile('file2');
const file3 = mkfile('file3');

const subdir1 = mkdir('subdir1', [file1]);
const subdir2 = mkdir('subdir2', [file2, mkdir('subsubdir1', [file3])]);

const rootDir = mkdir('root', [subdir1, subdir2]);

// Использование методов
console.log(getChildren(rootDir)); // Выводит список дочерних элементов корневого каталога
console.log(getMeta(file1)); // Выводит метаданные файла
console.log(getName(subdir2)); // Выводит имя подкаталога
console.log(isFile(file1)); // Проверяет, является ли элемент файлом
console.log(isDirectory(subdir1)); // Проверяет, является ли элемент каталогом
