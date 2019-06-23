describe('AgeUtils', () => {
    const { assert } = require('chai');
    const isUserOldEnough = require('../src/age_utils');

    it('Should return true if age is 18', () => {
        const user = {
            age: 18
        };

        const result = isUserOldEnough(user);
        assert.deepEqual(result, true);
    });

    it('Should return false if age is less than 18', () => {
        const user = {
            age: 15
        };

        const result = isUserOldEnough(user);
        assert.deepEqual(result, false);
    });
});