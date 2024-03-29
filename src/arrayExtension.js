/**
 * arrayExtension module.
 *
 * @module src/arrayExtension
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns the sum of all object's numbers.
 *
 * @param {{nr: number}[]} source - An array of objects to analyze.
 * @throws {TypeError} - Throws error if input is not an array.
 * @returns {number} - The total sum of the nr property of the objects in the provided array.
 */
export function getSum (source) {
  if (!Array.isArray(source)) {
    throw new TypeError('The passed argument is not an array.')
  }

  const sum = source
        .map(element => element.nr)
        .reduce((a, b) => a + b, 0)

  return sum
}
