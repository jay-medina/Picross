import { adder } from './testFile';

describe('testFile', () => {
  describe('adder', () => {
    it('adds two numbers', () => {
      expect(adder(4, 5)).toBe(9);
    });
  });
});
