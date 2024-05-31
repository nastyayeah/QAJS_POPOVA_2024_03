/**
 * Проверка имени пользователя
 * @param {string} name
 * @returns {boolean}
 */

export const nameIsValid = name =>
  !!name && name.length >= 2 && /^[a-z]+$/.test(name)

/**
 * Удаление пробелов из строки
 *
 * @param {string} text
 * @returns {string}
 */

export const fullTrim = text => (text || '').replace(/\s/g, '')

/**
 * Подсчёт суммы заказа
 *
 * @param {[{quantity: number, name?: string, price: number}]} items
 * @param {number} discount
 * @example getTotal([{ price: 10, quantity: 10 }]) // 100
 * @example getTotal([{ price: 10, quantity: 1 }]) // 10
 * @example getTotal([{ price: 10, quantity: 1 }, { price: 10, quantity: 9 }]) // 100
 * @example getTotal([{ price: 10, quantity: 0 }], { price: 10, quantity: 9 }) // 90
 * @example getTotal([{ price: 10, quantity: 10 }], 10) // 90
 * @example getTotal([{ price: 10, quantity: 10 }], 100) // 0
 */
export const getTotal = (items = [], discount = 0) => {
  if (typeof discount !== 'number') {
    throw new Error('Скидка должна быть числом')
  }
  if (discount < 0) {
    throw new Error('Процент скидки не может быть отрицательным')
  }
  if (discount >= 100) {
    throw new Error('Процент скидки не может быть больше 100')
  }

  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)
  return total - (total * discount) / 100
}

/**
 * Получение суммы всех баллов
 *
 * @param {name : score} scoreObj
 * @example getScore({Anna : 10, Olga : 1,  Ivan : 5}) // 16
 * @example getScore({Vlad : 5, Vova : 8, Petya : 1}) // 14
 * @example getScore({Anastasia : 10, Katya : 1, Alex : 9}) // 20
 */

const scores = {
  // scores - обьект, anna/olga/ivan - ключи, 10/1/5 - значение
  Anna: 10,
  Olga: 1,
  Ivan: 5,
}

function getScore(scoreObj) {
  let counter = 0
  let obj
  for (obj in scoreObj) {
    counter += scoreObj[obj]
  }
  return counter
}

console.log(getScore(scores))
