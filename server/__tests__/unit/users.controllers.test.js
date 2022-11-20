const usersController = require('../../controllers/users.controllers.js');
const userModel = require('../../models/users.js');

//mockear el servicio que usemos para conectar con la base de DB, en este caso particular es axios pero podria ser mongoose
const axios = require('axios');
jest.mock('axios');

describe('Testing users controllers', () => {
    describe('getAllUsers', () => {
        beforeAll(() => {
            axios.get.mockResolvedValue({data: {users: [{}, {}]}});
        });
        it('Should call /models/users.find()', async () => {
            const spy = jest.spyOn(userModel, 'find');

            expect.assertions(2);

            const req = {};
            const res = {json: jest.fn()};
            const next = jest.fn();

            try{
                const response = await usersController.getAllUsers(req, res, next);

                expect(spy).toHaveBeenCalledOnce();
                expect(next).toHaveBeenCalledTimes(0)
            }catch(e){
                console.log(e);
            }
        });

        it('Should call res.json', async () => {
            expect.assertions(1);

            const req = {};
            const res = {json: jest.fn()};
            const next = jest.fn();

            try{
                const response = await usersController.getAllUsers(req, res, next);

                expect(res.json).toHaveBeenCalledTimes(1)
            }catch(e){
                console.log(e)
            }
        })
    });
});