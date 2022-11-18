import {stdDev} from './stdDev.js'
import * as avgModule from './avg.js'

describe('Testing the stdDev function', () => {
    it('Should return 0 for a constant array', () => {
        expect(stdDev([3,3,3,3])).toEqual(0);
    });

    it('Should return 0.81649 for [1,2,3]', () => {
        expect(stdDev([1,2,3])).toBeCloseTo(0.81649, 4)
    });

    it('Should not return a negative value for any input array', () => {
        expect(stdDev([1, 2, 3])).not.toBeNegative();
        expect(stdDev([-1, -2, 3])).not.toBeNegative();
        expect(stdDev([0, 0])).not.toBeNegative();
    });

    it('Should call avg function', () => {
        const spy = jest.spyOn(avgModule, 'avg');
        const result = stdDev([0, 1, 2]);

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith([0, 1, 2]);
    });
    it('Should call avg function only 2', () => {
        const spy = jest.spyOn(avgModule, 'avg');
        const result = stdDev([0, 1, 2]);

        expect(spy).toHaveBeenCalledTimes(2)
    });
    it('Should call avg function first time with argument[0, 1, 2]', () => {
        const spy = jest.spyOn(avgModule, 'avg');
        const result = stdDev([0, 1, 2]);

        expect(spy).toHaveBeenNthCalledWith(1, [0, 1, 2]);
        expect(spy).toHaveBeenNthCalledWith(2, [1, 0, 1]);
    })
});