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
const file1 = mkfile('file1_1');
const file2 = mkfile('file2_2');
const file3 = mkfile('file3_3');
const file4 = mkfile('file4_8');

const subdir1 = mkdir('subdir1_4', [file1, file4]);
const subdir2 = mkdir('subdir2_5', [file2, mkdir('subsubdir1_6', [file3])]);
const subdir3 = mkdir('subdir3_9', []);

const rootDir = mkdir('root_7', [subdir1, subdir2, subdir3]);

// Использование методов
console.log(getChildren(rootDir)); // Выводит список дочерних элементов корневого каталога
console.log(getMeta(file1)); // Выводит метаданные файла
console.log(getName(subdir2)); // Выводит имя подкаталога
console.log(isFile(file1)); // Проверяет, является ли элемент файлом
console.log(isDirectory(subdir1)); // Проверяет, является ли элемент каталогом

// Дополнительные проверки
console.log(isFile(subdir3)); // Проверяет, является ли subdir3 файлом
console.log(isDirectory(subdir3)); // Проверяет, является ли subdir3 каталогом
