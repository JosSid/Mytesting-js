const usersController = require('../../controllers/users.controllers.js')
const usersModel = require('../../models/users.js')

// mockear el servicio que usemos para conectar con la DB, en este caso particular es axios
const axios = require('axios')
jest.mock('axios')

describe('Testing users controllers', () => {
    describe('getAllUsers', () => {
        beforeAll(() => {
            axios.get.mockResolvedValue({data: {users: [{}, {}]}})
        })
        it('Should call /models/users.find()', async () => {
            const spy = jest.spyOn(usersModel, 'find')

            expect.assertions(2)

            const req = {}
            const res = {json: jest.fn()}
            const next = jest.fn()
            try{
                const response = await usersController.getAllUsers(req, res, next)
                expect(spy).toHaveBeenCalledOnce()
                expect(next).toHaveBeenCalledTimes(0)
            } catch (e){
                console.log(e)
            }
        })
        it('Should call res.json', async () => {
            expect.assertions(1)

            const req = {}
            const res = {json: jest.fn()}
            const next = jest.fn()
            try{
                const response = await usersController.getAllUsers(req, res, next)
                expect(res.json).toHaveBeenCalledTimes(1)
            } catch (e){
                console.log(e)
            }
        })
    })
    describe('getUser', () => {
        it.todo('Should return one user by id')
    })
})