import { reverse, isBoolean } from './index';

describe('test reverse string, isBoolean', () => {
    test('hello => olleh', () => {
        expect(reverse('hello')).toBe('olleh');
    });

    test('true', () => {
        expect(isBoolean(1)).toBeTruthy();
    });

    test('false', () => {
        expect(isBoolean(0)).toBeFalsy();
    });
});
