const request = require('supertest');
const app = require('../../app.js');
/* const axios = require('axios');

jest.mock('axios')

const users = [
    {
      "id": 1,
      "name": "Winnie McDowell",
      "image": "https://randomuser.me/api/portraits/thumb/women/75.jpg"
    },
    {
      "id": 2,
      "name": "Donnie Prest",
      "image": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
    }
  ];

  const mockValue = () => {
    const dataSet = {data: users}
    axios.get.mockResolvedValue(dataSet)
  } */

describe('Testin users endpoints', () => {
    describe('GET / users', () => {
        /* beforeEach(() => {
            mockValue()
            
        }) */
        it('Should return 2 users', async () => {
            const response = await request(app).get('/users');

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('users');
            expect(response.body.users.length).toBeGreaterThanOrEqual(2);
        })
    });

    describe('GET / users:id', () => {
        /* beforeEach(() => {

            mockValue()
        }) */
        it('Should return a user', async () => {
            const response = await request(app).get('/users/2');

            expect(response.body).toHaveProperty('user')
        });

        it('Should return a user={id: 1} for id 1', async () => {
            const response = await request(app).get('/users/1');

            expect(response.body.user/*[0]*/).toMatchObject({id: 1})
        });
        
    });

    describe('POST /users', () => {
        it('Should return the created user', async () => {
            const newUser = {name: 'Josep', image: 'https://api.placid.app/u/qsraj?title[text]=I%20am%20a%20dynamic%20Image%21'}

            const response = await request(app).post('/users').send(newUser);

            expect(response.body.user).toMatchObject(newUser);
        });

        it('Should return the created user', async () => {
            const newUser = {name: 'Manolete', image: 'https://api.placid.app/u/qsraj?title[text]=Manolete'}

            const response = await request(app).post('/users').send(newUser);

            expect(response.body.user).toHaveProperty('id');
        });
    });
});