import { isNumber } from "../../../src/utils/isNumber";
import { BASE_URL } from "../../../src/utils/external_serives";
import { basename } from "path";

describe('isNumber Utils', () => {

    beforeEach(() => {
        jest.clearAllMocks()
    })
    it('should match base url', () => {
        expect(basename).toEqual('https://api.deezer.com');
    });

    it('Its not a number', () => {
        [false, true, NaN, [], {}, '1a'].map((n) => {
            expect(isNumber(n)).toEqual(false);
        });
    });
});