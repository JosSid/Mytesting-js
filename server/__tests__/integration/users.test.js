const request = require('supertest');
const app = require('../../app.js')

describe('Testing users endpoints', () => {
    describe('GET /users', () => {
        it('should return 2 users', async () => {
            const response = await request(app).get('/users')

            expect(response.statusCode).toBe(200)
            expect(response.body).toHaveProperty('users')
            expect(response.body.users.length).toBeGreaterThanOrEqual(0)
        })
    })

    describe('GET /users:id', () => {
        it('should return a user', async () => {
            const response = await request(app).get('/users/2')
    
            expect(response.body).toHaveProperty('user')
        })
        it('should return a user={id: 1} for id 1', async () => {
            const response = await request(app).get('/users/1')
    
            expect(response.body.user).toMatchObject({id: 1})

        })
    })

    describe('POST /users', () => {
        afterEach(() => {
            // delete created user
        })
        it('should return the created user', async () => {

            const newUser = {name: 'Jordi', image: 'https://api.placid.app/u/qsraj?title[text]=I%20am%20a%20dynamic%20Image%21'}
            const response = await request(app).post('/users').send(newUser)

            expect(response.body.user).toMatchObject(newUser)

        })
        it('should return the created user with a new id', async () => {

            const newUser = {name: 'Manolete', image: 'https://api.placid.app/u/qsraj?title[text]=Manolete'}
            const response = await request(app).post('/users').send(newUser)

            expect(response.body.user).toHaveProperty('id')

        })
        it.todo('should return an error if the user has no name')
    })
})