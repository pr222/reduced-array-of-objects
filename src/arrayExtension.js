/**
 * arrayExtension module.
 *
 * @module src/arrayExtension
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ellen Nu <en999zz@student.lnu.se>
 * @version 1.0.0
 */

const ERROR_MESSAGE_NOT_AN_ARRAY = 'The passed argument is not an array.'

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns the sum of all object's numbers.
 *
 * @param {{nr: number}[]} source - An array of objects to analyze.
 * @returns {number} - The total sum of the nr property of the objects in the provided array.
 */
export function getSum (source) {
// Is it an array?
  if (!Array.isArray(source)) {
    throw TypeError(ERROR_MESSAGE_NOT_AN_ARRAY)
  }

  // Important to set a start value and just treat sum as a Number
  // otherwise we get NaN. 0 is the start value for sum.
  return source.reduce((sum, value) => sum + value.nr, 0)
}
