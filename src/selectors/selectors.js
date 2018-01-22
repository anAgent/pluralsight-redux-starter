/**
 * Returns a parsed list for a drop down for authors.
 * @param {array} authors - the array of authors.
 */
export function authorsFormattedForDropDown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}
