/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 1.0.0
 */

import { getSum } from './arrayExtension.js'

const data = [{ nr: 4 }, { nr: 5 }]
let result = getSum(data)
console.log(result) // 9

data.push({ nr: 33 })
result = getSum(data)
console.log(result) // 42
