const { fetch } = require('../breeds');
const { assert } = require('chai');

describe('fetch', () => {
  it('it should return true statement if the text matches the desicription required.', function() {
    const matchText = "The Siberians dog like temperament and affection makes the ideal lap cat and " +
      "will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap " +
      "and reach high places, including the tops of refrigerators and even doors.";

    assert.equal(fetch('Siberian'));
  });
  it('returns false when the description does not much requested breed.', function() {
    const notMatchText = "The  dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

    const notPassTest = fetch(notMatchText);
    assert.equal(fetch('Siberian'));

  });
});



