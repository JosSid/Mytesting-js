import {failedRequest, successfulRequest} from './promises.js'

describe('Callback style', () => {
    it('Should fail the request failedRequest', (done) => {
        failedRequest().catch(e => {
            expect(e.message).toMatch(/failed/i);
            done()
        });
    });
    it.todo('Should have status 200 the request successfulRequest');
});

describe('Promise style', () => {
    it('Should have status 200 the request successfulRequest', () => {
        //SUPER UTIL PARA CODIGO ASINCRONO
        expect.assertions(1)
        return successfulRequest().then(response => {
            expect(response.status).toEqual(200)
        });
    });
    it.todo('Should fail the request failedRequest')
});

describe('.rejects/.resolves style', () => {
    it('Should fail the request failedRequest', () => {
        expect.assertions(1);
        return expect(failedRequest()).rejects.toThrow(/request failed/i)
    });
    it.todo('Should have status 200 the request successfulRequest');
});

describe('async & await style', () => {
    it('Should have status 200 the request successfulRequest', async () => {
        expect.assertions(1);
        try{
            const response = await successfulRequest();
            expect(response.status).toBeGreaterThanOrEqual(200);
        }catch(e){

        }
    });
    it.todo('Should fail the request failedRequest')
});