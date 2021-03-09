import { expect } from '@open-wc/testing'
import { booleanConverter } from '../index'

describe('utils tests', () => {
  describe('getBoolConverter function', () => {
    const { fromAttribute, toAttribute } = booleanConverter
    it('expects fromAttribute to return true for any value different than "false"', async () => {
      expect(fromAttribute('true')).to.be.true
      expect(fromAttribute('100')).to.be.true
      expect(fromAttribute('anything')).to.be.true
      expect(fromAttribute('false')).to.be.false
    })
    it('expects toAttribute to return "true" or "false" deppending on the value passed', async () => {
      expect(toAttribute('true')).to.be.equal('true')
      expect(toAttribute('false')).to.be.equal('true')
      expect(toAttribute('anything')).to.be.equal('true')
      expect(toAttribute('')).to.be.equal('false')
    })
  })
})
