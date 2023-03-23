import { handler } from '../../src';

describe('smoke', () => {
    it('Exports the handler', () => {
        expect(handler).toBeTruthy();
    });
});
