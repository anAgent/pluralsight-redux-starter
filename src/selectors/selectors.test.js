import expect from 'expect';
import {authorsFormattedForDropDown} from './selectors';

describe('selectors', () => {
  describe('authorsFormattedForDropDown', () => {
    it('should return author data for a drop down.', () => {
      // Arrange
      const authors = [
        {id: '1', firstName: 'First 1', lastName: 'Last 1'},
        {id: '2', firstName: 'First 2', lastName: 'Last 2'}
      ];

      const expectedResult = [
        {value: '1', text: 'First 1 Last 1' },
        {value: '2', text: 'First 2 Last 2' }
      ];

      // Act
      const result = authorsFormattedForDropDown(authors);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});
