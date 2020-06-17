/**
 * Tests for the arrayExtension module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import { getSum } from '../src/arrayExtension.js'

const expect = chai.expect

const ERROR_MESSAGE_NOT_AN_ARRAY = 'The passed argument is not an array.'

// ------------------------------------------------------------------------------
//  getSum
// ------------------------------------------------------------------------------
describe('getSum', () => {
  describe('exceptions', () => {
    it(`Passing anything but an array should throw TypeError with the custom message '${ERROR_MESSAGE_NOT_AN_ARRAY}'.`, () => {
      expect(() => { getSum('not an array') }).to.throw(TypeError, ERROR_MESSAGE_NOT_AN_ARRAY)
    })
  })

  describe('side effects', () => {
    it('Passing an array should return a number and not modify the argument.', () => {
      const ORIGINAL = [{ nr: 3 }, { nr: 42 }, { nr: -3 }]
      const data = JSON.parse(JSON.stringify(ORIGINAL))

      expect(getSum(data))
        .to.be.a('number')
      expect(data)
        .to.eql(ORIGINAL)
    })
  })

  describe('return value', () => {
    it('Passing  [{ nr: 4 }, { nr : -5 }] should return -1.', () => {
      expect(getSum([{ nr: 4 }, { nr: -5 }])).eql(-1)
    })

    it('Passing [{ nr: 3 }, { nr : 3 }, { nr: 3 }] should return 9.', () => {
      expect(getSum([{ nr: 3 }, { nr: 3 }, { nr: 3 }])).eql(9)
    })

    it('Passing [{ nr: 42 }] should return 42.', () => {
      expect(getSum([{ nr: 42 }])).eql(42)
    })

    it('Passing [] should return 0.', () => {
      expect(getSum([])).eql(0)
    })
  })
})
