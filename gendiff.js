#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff') // Название утилиты
  .usage('[options] <filepath1> <filepath2>') // Строка использования, добавление двух аргументов
  .description('Compares two configuration files and shows a difference.') // Описание программы
  .version('0.0.1') // Версия утилиты
  .argument('<filepath1>', 'path to the first file') // Первый обязательный аргумент
  .argument('<filepath2>', 'path to the second file') // Второй обязательный аргумент
  .option('-f, --format [type]', 'output format') // Опция выбора формата
  .helpOption('-h, --help', 'output usage information'); // Опция справки

program.parse(process.argv);