import {avg, stdDev} from './statistics.js';

describe('Testing the avg function', () => {
    it('Should return 1 for input array [1,1]', () => {
        expect(avg([1,1])).toEqual(1);
        expect(avg([1,1])).toBe(1);
    });

    it('Should return NaN for input array []', () => {
        expect(avg([])).toBeNaN();
        expect(avg([])).toBe(NaN);
    });

    it('Should return a positive number for array with all positive numbers', () => {
        expect(avg([0,1])).toBeGreaterThanOrEqual(0);
        expect(avg([0,1,3,44])).toBeGreaterThanOrEqual(0);
        expect(avg([1,3,44])).toBeGreaterThanOrEqual(0);
        expect(avg([1])).toBeGreaterThanOrEqual(0);
    });

    it('Should not return -1 for input array [1,2,3]', () => {
        expect(avg([1,2,3])).not.toEqual(-1);
    });

    it('Should not return undefined for input array []', () => {
        expect(avg([])).not.toBeUndefined()
    });
    it('Should not return a positive number for array with all negative numbers', () => {
        expect(avg([-1, -2])).not.toBePositive()
    });
});

describe('Testing the stdDev function', () => {
    it('Should return 0 for a constant array', () => {
        expect(stdDev([3,3,3,3])).toEqual(0);
    });

    it('Should return 0.81649 for [1,2,3]', () => {
        expect(stdDev([1,2,3])).toBeCloseTo(0.81649, 4)
    });

    it('Should not return a negative value for any input array', () => {
        expect(stdDev([])).not.toBeNegative();
    });
});

it.skip('Prueba random de suma de flotantes', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3)
});

it('Prueba random de división por zero', () => {
    expect(3 / 0).not.toBeFinite();
    expect(4 / 0).toEqual(Infinity);
});



