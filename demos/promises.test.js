import {failedRequest, successfulRequest, randomRequest} from './promises.js'

describe('Callback style', () => {
    it('Should fail the request failedRequest', (done) => {
        failedRequest().catch(e => {
            expect(e.message).toMatch(/failed/i);
            done()
        });
    });
    it('Should have status 200 the request successfulRequest', (done) => {
        successfulRequest().then(response => {
            expect(response.status).toBe(200);
            done();
        })
    });
});

describe('Promise style', () => {
    it('Should have status 200 the request successfulRequest', () => {
        //SUPER UTIL PARA CODIGO ASINCRONO
        expect.assertions(1)
        return successfulRequest().then(response => {
            expect(response.status).toEqual(200)
        });
    });
    it('Should fail the request failedRequest', () => {
        expect.assertions(1);
        return failedRequest().catch(e => {
            expect(e.message).toMatch(/failed/i)
        })
    });
});

describe('.rejects/.resolves style', () => {
    it('Should fail the request failedRequest', () => {
        expect.assertions(1);
        return expect(failedRequest()).rejects.toThrow(/request failed/i)
    });
    /*rep*/it('Should have status 200 the request successfulRequest', () => {
        expect.assertions(1);
        return expect(successfulRequest().then(data => data.status)).resolves.toBe(200)
    });
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
     it('Should fail the request failedRequest', async () => {
        expect.assertions(1);
        try{
            const response = await failedRequest()
        }catch(e){
            expect(e.response.status).toBeGreaterThanOrEqual(400)
        }
    }); 
    it('Should make 1 assertion for randomRequest', async () => {
        expect.assertions(1);
        try {
            const response = await randomRequest();
            expect(response.status).toBeGreaterThanOrEqual(200);
        }catch(e){
            expect(e.response.status).toBeGreaterThanOrEqual(400)
        }
    })
});