"use strict"

class User {
  #_staticCode = 86020;
  #_codeClassificationPPO = {
    'АППАРАТ': '000',
    'СОКБ': '011',
    'ОКДЦ': '021',
    'СКПЦ': '031',
    'СКВД': '041',
    'СПК': '051',
    'СКПБ': '061',
    'СКПД': '071',
    'СПИД': '081',
    'СГКБ': '092',
    'СГКП 1': '102',
    'СГКП 2': '112',
    'СГКП 3': '122',
    'СГКП 4': '132',
    'СГКП 5': '142',
    'СГСП 1': '152',
    'СГСП 2': '162',
    'СГКССМП': '172',
    'КВФД': '182',
    'ЦМП': '192',
    'ФГБ': '203',
    'НСУБ': '213',
    'СРП': '223',
    'ЛГБ': '233',
    'ЦГИЭ': '244',
    'ЦЛМ': '281',
    'РАС': '291'
  };

  constructor(name, ppo) {
    this.name = name;
    this.ppo = ppo;
    this.#_accessCheck(ppo);
  }

  #_accessCheck(check) {
    let access = check in this.#_codeClassificationPPO
    if (access) {
      console.log('*-Success-*')
    } else {
      console.log('*-ERROR-* -- Наименование отсутствует или введено с ошибкой')
    }
  }
}

const user =
  new User('Иванов Иван Иванович', 'ЦЛМ');

const baseCodePpo = {
  'АППАРАТ': '000',
  'СОКБ': '011',
  'ОКДЦ': '021',
  'СКПЦ': '031',
  'СКВД': '041',
  'СПК': '051',
  'СКПБ': '061',
  'СКПД': '071',
  'СПИД': '081',
  'СГКБ': '092',
  'СГКП 1': '102',
  'СГКП 2': '112',
  'СГКП 3': '122',
  'СГКП 4': '132',
  'СГКП 5': '142',
  'СГСП 1': '152',
  'СГСП 2': '162',
  'СГКССМП': '172',
  'КВФД': '182',
  'ЦМП': '192',
  'ФГБ': '203',
  'НСУБ': '213',
  'СРП': '223',
  'ЛГБ': '233',
  'ЦГИЭ': '244',
  'ЦЛМ': '281',
  'РАС': '291'
};
console.log(user)
